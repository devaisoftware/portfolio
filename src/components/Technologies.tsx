import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const technologies = [
  // Frontend
  { name: 'React', icon: 'fab fa-react', category: 'Frontend' },
  { name: 'Angular', icon: 'fab fa-angular', category: 'Frontend' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', category: 'Frontend' },
  { name: 'JavaScript', icon: 'fab fa-js-square', category: 'Frontend' },
  { name: 'TypeScript', icon: 'fab fa-js', category: 'Frontend' },
  { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'fab fa-node-js', category: 'Backend' },
  { name: 'Python', icon: 'fab fa-python', category: 'Backend' },
  { name: 'Java', icon: 'fab fa-java', category: 'Backend' },
  { name: '.NET', icon: 'fab fa-windows', category: 'Backend' },
  { name: 'PHP', icon: 'fab fa-php', category: 'Backend' },
  { name: 'Laravel', icon: 'fab fa-laravel', category: 'Backend' },
  
  // Mobile
  { name: 'React Native', icon: 'fab fa-react', category: 'Mobile' },
  { name: 'Flutter', icon: 'fas fa-mobile-alt', category: 'Mobile' },
  { name: 'Swift', icon: 'fab fa-apple', category: 'Mobile' },
  { name: 'Kotlin', icon: 'fab fa-android', category: 'Mobile' },
  
  // Cloud & Database
  { name: 'AWS', icon: 'fab fa-aws', category: 'Cloud' },
  { name: 'Azure', icon: 'fab fa-microsoft', category: 'Cloud' },
  { name: 'Google Cloud', icon: 'fab fa-google', category: 'Cloud' },
  { name: 'Docker', icon: 'fab fa-docker', category: 'Cloud' },
  { name: 'MongoDB', icon: 'fas fa-database', category: 'Database' },
  { name: 'PostgreSQL', icon: 'fas fa-database', category: 'Database' },
];

const Technologies: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Software Development Technology Stack
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-slide-left">
            <div className="flex gap-8 min-w-full">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="bg-white dark:bg-neutral-800 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 p-6 min-w-32 flex-shrink-0 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <i className={`${tech.icon} text-3xl text-primary-600 group-hover:text-accent-500 transition-colors duration-300`} />
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;