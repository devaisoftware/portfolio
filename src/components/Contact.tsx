import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ToastManager } from './Toast';
import { Handshake, Mail, Phone, MapPin, Clock, Award, Star, Shield, User, Settings, MessageSquare, Send } from 'lucide-react';

type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const addToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToasts((prev) => [...prev, { id: Date.now(), message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        addToast('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        form.reset();
      } else {
        addToast('There was an error sending your message. Please try again.', 'error');
      }
    } catch (error) {
      addToast('There was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastManager toasts={toasts} removeToast={removeToast} />
      <section id="contact" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20 dark:from-neutral-900 dark:to-neutral-800">
        {/* SEO Hidden Content */}
        <div className="sr-only">
          <h2>Contact Devai Software - Custom Software Development Company</h2>
          <p>Get in touch with our software development experts for a free consultation. We provide custom software development, mobile app development, AI solutions, and enterprise software services worldwide. Contact us today for your next project.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Get In Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-6">
              Ready to Start Your Software Development Project?
            </h2>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Contact our software development experts for a free consultation and project estimate. Let's discuss how we can help transform your business with custom software solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border-r-4 border-primary-500 h-full">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  Contact Our Expert Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Ready to accelerate your digital transformation? Our software development experts are here to help you build innovative solutions that drive business growth. Get a free consultation and project estimate today.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <a 
                        href="mailto:info@devaisoftware.com"
                        className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 transition-colors font-medium"
                      >
                        info@devaisoftware.com
                      </a>
                      <div className="text-sm text-neutral-500">Email for project inquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <a 
                        href="tel:+917990950282"
                        className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 transition-colors font-medium"
                      >
                        +91 7990950282
                      </a>
                      <div className="text-sm text-neutral-500">Call for immediate assistance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                        Pune, Maharashtra, India
                      </span>
                      <div className="text-sm text-neutral-500">Global software development</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-primary-500 w-6 h-6 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                        24/7 Support Available
                      </span>
                      <div className="text-sm text-neutral-500">Round-the-clock assistance</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent-600 font-semibold">
                    <Award className="w-5 h-5" />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-500 font-semibold">
                    <Star className="w-5 h-5" />
                    <span>Top-Rated on Clutch</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-500 font-semibold">
                    <Shield className="w-5 h-5" />
                    <span>Trusted by Global Innovators</span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form 
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border-l-4 border-primary-500"
                action="https://formsubmit.co/devaisoftware02@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success Page */}
                <input type="hidden" name="_next" value="https://devaisoftware.com/thank-you.html" />
                {/* Subject */}
                <input type="hidden" name="_subject" value="New Software Development Inquiry from Website" />
                
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                  Get a Free Consultation
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                      <Settings className="w-4 h-4" />
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="SaaS Platform Development">SaaS Platform Development</option>
                      <option value="QA & Testing Services">QA & Testing Services</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Dedicated Developers">Hire Dedicated Developers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-300 resize-vertical"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending Request...' : 'Get Free Consultation'}
                </motion.button>
                
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
                  We'll respond within 24 hours with a detailed project proposal and cost estimate.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;