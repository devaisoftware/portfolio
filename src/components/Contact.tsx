import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit will handle the actual submission
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
      });
      
      // Show success message or redirect
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      form.reset();
    } catch (error) {
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-900">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Contact Devai Software - Custom Software Development Company</h2>
        <p>Get in touch with our software development experts for a free consultation. We provide custom software development, mobile app development, AI solutions, and enterprise software services worldwide. Contact us today for your next project.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <i className="fas fa-handshake" />
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
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-brand border-r-4 border-primary-600 h-full">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Contact Devai Software Development Team
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Ready to accelerate your digital transformation? Our software development experts are here to help you build innovative solutions that drive business growth. Get a free consultation and project estimate today.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <i className="fas fa-envelope text-primary-600 text-xl w-6" />
                  <div>
                    <a 
                      href="mailto:info@devaisoftware.com"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 transition-colors font-medium"
                    >
                      info@devaisoftware.com
                    </a>
                    <div className="text-sm text-neutral-500">Email us for project inquiries</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-phone text-primary-600 text-xl w-6" />
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
                  <i className="fas fa-map-marker-alt text-primary-600 text-xl w-6" />
                  <div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                      Pune, Maharashtra, India
                    </span>
                    <div className="text-sm text-neutral-500">Global software development services</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-clock text-primary-600 text-xl w-6" />
                  <div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                      24/7 Support Available
                    </span>
                    <div className="text-sm text-neutral-500">Round-the-clock assistance</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent-500 font-semibold">
                  <i className="fas fa-award" />
                  <span>ISO 27001 Certified Company</span>
                </div>
                <div className="flex items-center gap-2 text-success-500 font-semibold">
                  <i className="fas fa-star" />
                  <span>4.9/5 Client Satisfaction Rating</span>
                </div>
                <div className="flex items-center gap-2 text-primary-500 font-semibold">
                  <i className="fas fa-shield-alt" />
                  <span>Trusted by Global Innovators and Growing Brands</span>
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
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-brand border-l-4 border-primary-600"
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
                Get Free Software Development Consultation
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <i className="fas fa-user" />
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
                    <i className="fas fa-envelope" />
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
                    <i className="fas fa-phone" />
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
                    <i className="fas fa-cogs" />
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
                  <i className="fas fa-comment-dots" />
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
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg rounded-lg shadow-brand hover:shadow-brand-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <i className="fas fa-paper-plane" />
                {isSubmitting ? 'Sending Your Request...' : 'Get Free Consultation'}
              </motion.button>
              
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
                We'll respond within 24 hours with a detailed project proposal and cost estimate.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;