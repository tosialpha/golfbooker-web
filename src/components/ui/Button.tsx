import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-brand-green-600 hover:bg-brand-green-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-gray-300 hover:border-brand-green-600 text-gray-700 hover:text-brand-green-700 bg-white',
    outline: 'border-2 border-white text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
