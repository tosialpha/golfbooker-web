import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'orange' | 'blue';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'green', className = '' }) => {
  const variants = {
    green: 'bg-brand-green-100 text-brand-green-700',
    orange: 'bg-orange-100 text-brand-orange-500',
    blue: 'bg-brand-blue-50 text-brand-blue-600',
  };

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
