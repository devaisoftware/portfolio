import React from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:bg-none dark:bg-neutral-900/95 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold">Devai Software</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Leading Custom Software Development Company</h3>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Empowering businesses worldwide with innovative AI & custom software solutions. 
                We deliver transformative digital experiences that drive growth and success for Fortune 500 companies and startups alike.
              </p>
              
              {/* SEO Keywords */}
              <div className="text-sm text-slate-300 mb-4">
                <strong>Services:</strong> Custom Software Development, Mobile App Development, AI Development, 
                SaaS Platform Development, QA Testing, UI/UX Design, Digital Marketing, Dedicated Developers
              </div>
              
              <div className="text-sm text-slate-300 mb-6">
                <strong>Technologies:</strong> React, Angular, Node.js, Python, AI/ML, AWS, Azure, MongoDB, PostgreSQL, 
                React Native, Flutter, Angular, Vue.js, WordPress, Shopify, Magento, 
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <a 
                href="https://www.facebook.com/profile.php?id=61577075565690" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow Devai Software on Facebook"
              >
                <i className="fab fa-facebook text-lg" />
              </a>
              <a 
                href="https://www.instagram.com/devai.software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow Devai Software on Instagram"
              >
                <i className="fab fa-instagram text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/company/devai-software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Connect with Devai Software on LinkedIn"
              >
                <i className="fab fa-linkedin text-lg" />
              </a>
              <a 
                href="https://github.com/devaisoftware" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="View Devai Software projects on GitHub"
              >
                <i className="fab fa-github text-lg" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-500 rounded" />
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Software Development Services', id: 'services' },
                { label: 'Client Testimonials', id: 'testimonials' },
                { label: 'Contact Us', id: 'contact' },
                { label: 'FAQ', id: 'faq' }
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-slate-200 hover:text-accent-500 transition-colors duration-300 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 relative">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-500 rounded" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent-500" />
                <div>
                  <a 
                    href="mailto:info@devaisoftware.com" 
                    className="text-slate-200 hover:text-accent-500 transition-colors"
                  >
                    info@devaisoftware.com
                  </a>
                  <div className="text-xs text-slate-400">Business Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-accent-500" />
                <div>
                  <a 
                    href="tel:+917990950282" 
                    className="text-slate-200 hover:text-accent-500 transition-colors"
                  >
                    +91-7990950282
                  </a>
                  <div className="text-xs text-slate-400">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-accent-500" />
                <div>
                  <span className="text-slate-200">Pune, Maharashtra, India</span>
                  <div className="text-xs text-slate-400">Global Software Development</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-globe text-accent-500" />
                <div>
                  <span className="text-slate-200">Worldwide Services</span>
                  <div className="text-xs text-slate-400">50+ Countries Served</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <DarkModeToggle />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <a href="/privacy-policy" className="text-slate-200 hover:text-accent-500 transition-colors">Privacy Policy</a>
              <span className="text-slate-400">|</span>
              <a href="/terms-of-service" className="text-slate-200 hover:text-accent-500 transition-colors">Terms of Service</a>
              <span className="text-slate-400">|</span>
              <a href="/cookie-policy" className="text-slate-200 hover:text-accent-500 transition-colors">Cookie Policy</a>
              <span className="text-slate-400">|</span>
              <a href="/sitemap.xml" className="text-slate-200 hover:text-accent-500 transition-colors">Sitemap</a>
            </div>
            <div className="text-slate-300 text-sm text-center md:text-right">
              <p>© {currentYear} Devai Software. All rights reserved.</p>
              <p className="text-xs text-slate-400 mt-1">
                Premium Custom Software Development Company | AI Solutions | Mobile App Development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;