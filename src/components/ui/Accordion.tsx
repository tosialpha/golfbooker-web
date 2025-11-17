import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  icon,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-300 cursor-pointer ${
        isOpen
          ? 'bg-brand-green-50 border-brand-green-500 shadow-lg'
          : 'bg-white border-gray-200 hover:border-brand-green-500 hover:shadow-lg'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center gap-4 text-left"
      >
        {icon && (
          <div className="w-14 h-14 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};
