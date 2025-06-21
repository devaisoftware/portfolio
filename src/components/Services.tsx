import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ViewToggleHeader from './ViewToggleHeader';
import { Code, Smartphone, Bot, Boxes, TestTube2, Megaphone, PenTool, Users, Star, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Enterprise-grade custom software solutions tailored to your business requirements. We develop scalable, secure, and high-performance applications using modern technologies and best practices.',
    features: ['Enterprise Applications', 'Legacy System Modernization', 'API Development', 'Database Design'],
    color: 'from-blue-500 to-cyan-500',
    stats: { projects: '500+', satisfaction: '99%' },
    keywords: 'custom software development, enterprise software, web applications, software consulting'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS and Android mobile applications with cross-platform solutions. We create user-friendly mobile apps that drive engagement and business growth.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Development'],
    color: 'from-purple-500 to-pink-500',
    stats: { projects: '300+', satisfaction: '98%' },
    keywords: 'mobile app development, iOS apps, Android apps, cross-platform development'
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning Development',
    description: 'Advanced AI and machine learning solutions for automation, predictive analytics, and intelligent decision-making. Transform your business with artificial intelligence.',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-green-500 to-emerald-500',
    stats: { projects: '150+', satisfaction: '97%' },
    keywords: 'AI development, machine learning, artificial intelligence, automation solutions'
  },
  {
    icon: Boxes,
    title: 'SaaS Platform Development',
    description: 'End-to-end SaaS platform development from MVP to enterprise scale. We build multi-tenant, scalable cloud-based software solutions with robust security.',
    features: ['MVP Development', 'Multi-tenant Architecture', 'Cloud Infrastructure', 'Subscription Management'],
    color: 'from-orange-500 to-red-500',
    stats: { projects: '200+', satisfaction: '99%' },
    keywords: 'SaaS development, cloud software, multi-tenant applications, subscription platforms'
  },
  {
    icon: TestTube2,
    title: 'QA & Software Testing Services',
    description: 'Comprehensive quality assurance and testing services to ensure your software is reliable, secure, and performs optimally across all platforms and devices.',
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual QA'],
    color: 'from-indigo-500 to-purple-500',
    stats: { projects: '800+', satisfaction: '98%' },
    keywords: 'software testing, QA services, automated testing, quality assurance'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & SEO',
    description: 'Data-driven digital marketing strategies, SEO optimization, and growth hacking to maximize your online presence and accelerate business growth.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy'],
    color: 'from-pink-500 to-rose-500',
    stats: { projects: '400+', satisfaction: '96%' },
    keywords: 'digital marketing, SEO services, PPC advertising, social media marketing'
  },
  {
    icon: PenTool,
    title: 'UI/UX Design Services',
    description: 'Premium UI/UX design and rapid prototyping for intuitive, engaging, and conversion-focused digital experiences that delight users.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-teal-500 to-cyan-500',
    stats: { projects: '600+', satisfaction: '99%' },
    keywords: 'UI UX design, user experience design, web design, mobile app design'
  },
  {
    icon: Users,
    title: 'Dedicated Developer Hiring',
    description: 'Hire skilled dedicated developers and development teams to scale your technology capabilities with flexibility, control, and cost-effectiveness.',
    features: ['Vetted Developers', 'Flexible Engagement', 'Dedicated Teams', 'Ongoing Support'],
    color: 'from-yellow-500 to-orange-500',
    stats: { projects: '250+', satisfaction: '97%' },
    keywords: 'hire developers, dedicated development team, offshore development, staff augmentation'
  }
];

const Services: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Professional Software Development Services</h2>
        <p>Comprehensive software development services including custom software development, mobile app development, AI development, SaaS platform development, QA testing, digital marketing, UI/UX design, and dedicated developer hiring. Serving businesses worldwide with enterprise-grade solutions.</p>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eab308 75%), linear-gradient(-45deg, transparent 75%, #eab308 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Our Software Development Services
          </div>
          <ViewToggleHeader title="Comprehensive Solutions" view={view} setView={setView} />
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto">
            From custom software development to AI integration, we provide end-to-end technology solutions that drive business success and digital transformation
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => setSelectedService(selectedService === index ? null : index)}
                    className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-700/50 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                    <motion.div
                      animate={hoveredIndex === index ? { rotate: 15, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center mb-4 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{service.stats.projects}</div>
                          <div className="text-xs text-neutral-500">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-500">{service.stats.satisfaction}</div>
                          <div className="text-xs text-neutral-500">Satisfaction</div>
                        </div>
                      </div>
                      <AnimatePresence>
                        {selectedService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.features.map((feature, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium"
                                >
                                  {feature}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-4 py-2 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg text-sm`}
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Get Quote
                      </motion.button>
                    </div>
                    <div className="sr-only">{service.keywords}</div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="space-y-4 max-w-4xl mx-auto">
                {services.map((service, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                        className="flex-shrink-0 px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-600"
                        aria-label={`${selectedService === index ? 'Hide' : 'Show'} details for ${service.title}`}
                      >
                        {selectedService === index ? 'Hide' : 'Details'}
                      </motion.button>
                    </div>
                    <AnimatePresence>
                      {selectedService === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-neutral-200 dark:border-neutral-700 pt-4"
                        >
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.map((feature, idx) => (
                              <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{service.stats.projects}</div>
                              <div className="text-xs text-neutral-500">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-500">{service.stats.satisfaction}</div>
                              <div className="text-xs text-neutral-500">Satisfaction</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            aria-label="Start your software development project today"
          >
            <Rocket className="w-6 h-6" />
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;