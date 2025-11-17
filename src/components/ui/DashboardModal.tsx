import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { DashboardPreview } from '../demo/DashboardPreview';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full h-full md:h-auto max-w-6xl overflow-x-auto overflow-y-auto md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Mobile Friendly */}
            <button
              onClick={onClose}
              className="fixed top-4 right-4 md:absolute md:-top-12 md:right-0 z-20 p-3 md:p-2 bg-black/80 md:bg-transparent rounded-full text-white hover:bg-black/90 md:hover:bg-transparent md:hover:text-gray-300 transition-all"
              aria-label="Sulje"
            >
              <X size={28} className="md:w-8 md:h-8" />
            </button>

            {/* Dashboard Preview - Scrollable on mobile */}
            <div className="inline-block min-w-full p-4 md:p-0">
              <div className="transform scale-[0.75] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-top-left md:origin-center">
                <DashboardPreview />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
