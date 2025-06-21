import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const processSteps = [
  { icon: 'fas fa-search', label: 'Discovery', progress: 25 },
  { icon: 'fas fa-pencil-ruler', label: 'Design', progress: 40 },
  { icon: 'fas fa-code', label: 'Development', progress: 60 },
  { icon: 'fas fa-vial', label: 'Testing', progress: 80 },
  { icon: 'fas fa-rocket', label: 'Deployment', progress: 90 },
  { icon: 'fas fa-headset', label: 'Support', progress: 100 },
];

const ProcessTimeline: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Agile Development Process
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-slide-right">
            <div className="flex items-center gap-8 min-w-full">
              {[...processSteps, ...processSteps].map((step, index) => (
                <React.Fragment key={`${step.label}-${index}`}>
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-brand p-6 min-w-36 flex-shrink-0 hover:-translate-y-2 transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white text-xl shadow-brand">
                        <i className={step.icon} />
                      </div>
                      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 text-center">
                        {step.label}
                      </span>
                      
                      {/* Progress Indicator */}
                      <div className="w-12 h-12 relative">
                        <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray={`${step.progress}, 100`}
                            className="text-primary-600"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-600">
                          {step.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-primary-600 relative flex-shrink-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-t-2 border-b-2 border-primary-600 border-t-transparent border-b-transparent" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;