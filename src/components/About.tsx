import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
          >
            <i className="fas fa-award" />
            About Our Software Development Company
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-6"
          >
            Premium Custom Software Development Company in India
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto"
          >
            Trusted by SME companies and innovative startups worldwide for enterprise-grade software solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="prose prose-lg text-neutral-600 dark:text-neutral-300">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Why Choose Devai Software for Your Next Project?
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Devai Software</strong> is a premium custom software development company specializing in AI integration, mobile app development, web application development, and enterprise software solutions. With over <strong>15+ successful projects</strong> delivered globally, we are the trusted technology partner for businesses seeking digital transformation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our expert team of software developers, AI specialists, and digital strategists combines cutting-edge technology with proven methodologies to deliver scalable, secure, and high-performance solutions that drive measurable business results.
              </p>
              
              <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Our Core Expertise:
              </h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-success-500 mt-1 flex-shrink-0" />
                  <span><strong>Custom Software Development</strong> - Enterprise-grade applications tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-success-500 mt-1 flex-shrink-0" />
                  <span><strong>AI & Machine Learning Development</strong> - Intelligent automation and predictive analytics solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-success-500 mt-1 flex-shrink-0" />
                  <span><strong>Mobile App Development</strong> - Native iOS and Android apps with cross-platform solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-success-500 mt-1 flex-shrink-0" />
                  <span><strong>SaaS Platform Development</strong> - Scalable cloud-based software solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 border-l-4 border-primary-600 shadow-brand">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Our Software Development Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-600 mb-2">92%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">45+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Support Available</div>
                </div>
              </div>
              
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <i className="fas fa-trophy text-accent-500 mt-1 flex-shrink-0" />
                  <span>Proficent software development team</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-shield-alt text-success-500 mt-1 flex-shrink-0" />
                  <span> Guarantee for security and quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-rocket text-primary-500 mt-1 flex-shrink-0" />
                  <span>Agile development methodology for faster delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-users text-secondary-500 mt-1 flex-shrink-0" />
                  <span>Dedicated project managers and technical leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-chart-line text-accent-500 mt-1 flex-shrink-0" />
                  <span>Proven track record of business growth acceleration</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-8">
            Our Software Development Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React.js', icon: 'fab fa-react' },
              { name: 'Node.js', icon: 'fab fa-node-js' },
              { name: 'Python', icon: 'fab fa-python' },
              { name: 'AWS Cloud', icon: 'fab fa-aws' },
              { name: 'MongoDB', icon: 'fas fa-database' },
              { name: 'Docker', icon: 'fab fa-docker' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2"
              >
                <i className={`${tech.icon} text-2xl text-primary-600`} />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;