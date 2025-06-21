import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const icons = {
  success: <CheckCircle className="w-6 h-6 text-green-500" />,
  error: <XCircle className="w-6 h-6 text-red-500" />,
  info: <Info className="w-6 h-6 text-blue-500" />,
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close after 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="flex items-center gap-4 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl p-4 border border-neutral-200 dark:border-neutral-700">
        {icons[type]}
        <p className="text-neutral-800 dark:text-neutral-100">{message}</p>
        <button onClick={onClose} className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200">
          <XCircle className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

interface ToastManagerProps {
  toasts: Array<{ id: number; message: string; type: 'success' | 'error' | 'info' }>;
  removeToast: (id: number) => void;
}

export const ToastManager: React.FC<ToastManagerProps> = ({ toasts, removeToast }) => {
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </AnimatePresence>
  );
}; 