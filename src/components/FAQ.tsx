import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqs = [
  {
    question: 'What types of custom software development services do you offer?',
    answer: 'We offer comprehensive custom software development services including enterprise web applications, mobile app development (iOS & Android), AI/ML solutions, SaaS platform development, e-commerce solutions, CRM systems, ERP software, and legacy system modernization. Our team specializes in modern technologies like React, Node.js, Python, AWS, and more.',
    keywords: 'custom software development, enterprise applications, web development, mobile apps'
  },
  {
    question: 'How much does custom software development cost?',
    answer: 'Software development costs vary based on project complexity, features, technology stack, and timeline. Simple applications start from $10,000, while enterprise solutions can range from $50,000 to $500,000+. We provide detailed cost estimates after understanding your requirements during our free consultation.',
    keywords: 'software development cost, project pricing, development budget'
  },
  {
    question: 'What industries do you serve with your software solutions?',
    answer: 'We serve diverse industries including FinTech, HealthTech, E-commerce, Education, Real Estate, Manufacturing, Logistics, and more. Our solutions are industry-agnostic and tailored to meet specific business requirements and compliance standards for each sector.',
    keywords: 'software development industries, fintech, healthtech, ecommerce solutions'
  },
  {
    question: 'How do you ensure software quality and project success?',
    answer: 'We follow agile development methodologies with rigorous quality assurance processes including automated testing, code reviews, security audits, and performance optimization. Our ISO 27001 certification ensures adherence to international quality and security standards.',
    keywords: 'software quality assurance, agile development, testing services'
  },
  {
    question: 'Can you integrate AI and machine learning into existing systems?',
    answer: 'Yes! We specialize in AI/ML integration for existing systems including chatbots, predictive analytics, recommendation engines, computer vision, natural language processing, and automation solutions. We ensure seamless integration with minimal disruption to your current operations.',
    keywords: 'AI integration, machine learning, artificial intelligence, automation'
  },
  {
    question: 'What is your software development process and timeline?',
    answer: 'Our development process includes Discovery & Planning (1-2 weeks), UI/UX Design (2-3 weeks), Development & Testing (8-16 weeks), Deployment (1 week), and ongoing Support. Timelines vary based on project complexity, but we provide detailed project roadmaps with milestones.',
    keywords: 'development process, project timeline, software development lifecycle'
  },
  {
    question: 'Do you provide ongoing support and maintenance after deployment?',
    answer: 'Yes, we offer comprehensive post-deployment support including bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 technical support. Our maintenance packages ensure your software remains secure, updated, and optimally performing.',
    keywords: 'software maintenance, ongoing support, technical support'
  },
  {
    question: 'Can you help migrate legacy systems to modern technologies?',
    answer: 'Absolutely! We specialize in legacy system modernization including cloud migration, database upgrades, API development, and complete system re-architecture. We ensure zero data loss and minimal downtime during the migration process.',
    keywords: 'legacy system modernization, system migration, cloud migration'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Frequently Asked Questions About Software Development Services</h2>
        <p>Common questions about custom software development, mobile app development, AI integration, project costs, timelines, and our development process. Get answers from our software development experts.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <i className="fas fa-question-circle" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-6">
            Software Development FAQ
          </h2>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Get answers to common questions about our custom software development services, processes, and pricing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                      {/* SEO Keywords (Hidden) */}
                      <div className="sr-only">{faq.keywords}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Still have questions about our software development services?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300"
          >
            <i className="fas fa-comments" />
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;