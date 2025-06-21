import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Custom Software',
    description: 'Next-generation software solutions powered by artificial intelligence and machine learning.',
    cta: 'Explore AI Solutions',
    icon: 'fas fa-brain',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Machine Learning', 'Predictive Analytics', 'Automation']
  },
  {
    title: 'Mobile App Excellence',
    description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
    cta: 'Build Your App',
    icon: 'fas fa-mobile-alt',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['iOS & Android', 'React Native', 'Flutter']
  },
  {
    title: 'Enterprise SaaS Platforms',
    description: 'Scalable SaaS solutions designed for enterprise-level performance and security.',
    cta: 'Launch Your SaaS',
    icon: 'fas fa-cloud',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Multi-tenant', 'Auto-scaling', 'Enterprise Security']
  },
  {
    title: 'Blockchain & Web3',
    description: 'Cutting-edge blockchain solutions and decentralized applications.',
    cta: 'Enter Web3',
    icon: 'fas fa-link',
    gradient: 'from-orange-500 to-red-500',
    features: ['Smart Contracts', 'DeFi', 'NFT Platforms']
  },
  {
    title: 'DevOps & Cloud Architecture',
    description: 'Modern cloud infrastructure and DevOps practices for optimal performance.',
    cta: 'Optimize Infrastructure',
    icon: 'fas fa-server',
    gradient: 'from-indigo-500 to-purple-500',
    features: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'UI/UX Design Studio',
    description: 'Award-winning design that converts visitors into customers.',
    cta: 'Transform Your Design',
    icon: 'fas fa-palette',
    gradient: 'from-pink-500 to-rose-500',
    features: ['User Research', 'Prototyping', 'Design Systems']
  }
];

const ServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleCards = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const moveCarousel = (direction: number) => {
    const visibleCards = getVisibleCards();
    const maxIndex = services.length - visibleCards;
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = maxIndex;
    if (newIndex > maxIndex) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #eab308 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-4">
            Our Signature Solutions
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of cutting-edge services designed to transform your business
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-6">
          <motion.button
            onClick={() => moveCarousel(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-accent-500 hover:to-primary-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
            aria-label="Previous services"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <div className="overflow-hidden flex-1 max-w-6xl">
            <motion.div
              ref={trackRef}
              className="flex gap-8"
              animate={{ x: -currentIndex * (400 + 32) }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 min-w-[400px] max-w-[400px] flex-shrink-0 border border-neutral-200/50 dark:border-neutral-700/50 group relative overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${service.icon} text-2xl text-white`} />
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      onClick={scrollToServices}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg group-hover:shadow-xl`}
                    >
                      {service.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.button
            onClick={() => moveCarousel(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-accent-500 hover:to-primary-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
            aria-label="Next services"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-600 scale-125' 
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-primary-300'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;