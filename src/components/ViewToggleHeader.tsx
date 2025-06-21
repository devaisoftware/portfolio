import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleHeaderProps {
  title: string;
  view: 'grid' | 'list';
  setView: (view: 'grid' | 'list') => void;
}

const ViewToggleHeader: React.FC<ViewToggleHeaderProps> = ({ title, view, setView }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-6 md:mb-0"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
      >
        <button
          onClick={() => setView('grid')}
          className={`p-2 rounded-full transition-colors duration-300 ${
            view === 'grid' ? 'bg-primary-500 text-white shadow-md' : 'text-neutral-500 hover:text-primary-500'
          }`}
          aria-label="Grid view"
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setView('list')}
          className={`p-2 rounded-full transition-colors duration-300 ${
            view === 'list' ? 'bg-primary-500 text-white shadow-md' : 'text-neutral-500 hover:text-primary-500'
          }`}
          aria-label="List view"
        >
          <List className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default ViewToggleHeader;
