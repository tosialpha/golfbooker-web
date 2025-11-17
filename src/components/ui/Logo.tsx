import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  className?: string;
  iconSize?: number;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  iconSize = 32,
  textColor = '#0f172a',
}) => {
  if (variant === 'icon') {
    return (
      <div className={`inline-flex ${className}`}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <line x1="20" y1="4" x2="20" y2="8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="31.4" y1="8.6" x2="28.8" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="36" y1="20" x2="32" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="31.4" y1="31.4" x2="28.8" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="20" y1="36" x2="20" y2="32" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8.6" y1="31.4" x2="11.2" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="4" y1="20" x2="8" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8.6" y1="8.6" x2="11.2" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="10" fill="#16a34a"/>
          <circle cx="20" cy="15" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="15.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="24.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="18" cy="23" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="22" cy="23" r="1.5" fill="white" opacity="0.4"/>
          <line x1="20" y1="20" x2="14" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
          <line x1="20" y1="4" x2="20" y2="8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="31.4" y1="8.6" x2="28.8" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="36" y1="20" x2="32" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="31.4" y1="31.4" x2="28.8" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="20" y1="36" x2="20" y2="32" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8.6" y1="31.4" x2="11.2" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="4" y1="20" x2="8" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8.6" y1="8.6" x2="11.2" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="10" fill="#16a34a"/>
          <circle cx="20" cy="15" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="15.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="24.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="18" cy="23" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="22" cy="23" r="1.5" fill="white" opacity="0.4"/>
          <line x1="20" y1="20" x2="14" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span
          className="font-semibold tracking-tight"
          style={{
            color: textColor,
            fontSize: iconSize * 0.5,
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          }}
        >
          Golf<span className="font-bold">Booker</span>
        </span>
      </div>
    );
  }

  // Full horizontal logo (default)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2.5" fill="none"/>
        <line x1="20" y1="4" x2="20" y2="8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="31.4" y1="8.6" x2="28.8" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="36" y1="20" x2="32" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="31.4" y1="31.4" x2="28.8" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="36" x2="20" y2="32" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8.6" y1="31.4" x2="11.2" y2="28.8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="20" x2="8" y2="20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8.6" y1="8.6" x2="11.2" y2="11.2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="10" fill="#16a34a"/>
        <circle cx="20" cy="15" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="15.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="24.5" cy="19" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="18" cy="23" r="1.5" fill="white" opacity="0.4"/>
        <circle cx="22" cy="23" r="1.5" fill="white" opacity="0.4"/>
        <line x1="20" y1="20" x2="14" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <span
        className="font-semibold tracking-tight"
        style={{
          color: textColor,
          fontSize: iconSize * 0.625,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        }}
      >
        Golf<span className="font-bold">Booker</span>
      </span>
    </div>
  );
};
