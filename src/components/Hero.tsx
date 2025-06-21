import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(16, 185, 129, 0.8) 50%, rgba(245, 158, 11, 0.9) 100%), url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center center/cover no-repeat`,
      }}
    >
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>Devai Software - Leading AI & Custom Software Development Company</h1>
        <p>Professional software development services including AI development, mobile app development, web development, and enterprise solutions. Serving Fortune 500 companies and startups worldwide with 500+ successful projects.</p>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 -top-48 -left-48 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-secondary-400/20 to-success-400/20 -bottom-40 -right-40 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-3xl text-center lg:text-left"
          >
            {/* Premium Glassmorphism Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 mt-10 md:mt-0"
              >
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                Trusted by Global Innovators and Growing Brands
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Leading{' '}
                <span className="bg-gradient-to-r from-accent-400 via-warning-400 to-accent-300 bg-clip-text text-transparent">
                  AI & Custom Software
                </span>{' '}
                Development Company
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed"
              >
                Enterprise-grade software solutions for Fortune 500s and ambitious startups. We deliver transformative AI-driven applications, mobile apps, web platforms, and SaaS solutions that accelerate business growth and digital transformation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <motion.button
                  onClick={scrollToAbout}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-500 to-warning-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 overflow-hidden"
                  aria-label="Discover our software development services"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-warning-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Discover Our Services</span>
                  <motion.i 
                    className="fas fa-rocket relative z-10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>

                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
                  aria-label="Book free software development consultation"
                >
                  <i className="fas fa-calendar-alt" />
                  Free Consultation
                </motion.button>
              </motion.div>

              {/* Trust Indicators with SEO Keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/20"
              >
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-star text-accent-400" />
                  <span className="text-sm">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-shield-alt text-success-400" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-clock text-primary-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-globe text-secondary-400" />
                  <span className="text-sm">Global Delivery</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;