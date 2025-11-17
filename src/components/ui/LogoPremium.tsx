import React from 'react';

interface LogoPremiumProps {
  concept?: 'dimple' | 'orbital' | 'spinner' | 'tee' | 'g-tee' | 'shield' | 'crossed-clubs';
  variant?: 'full' | 'stacked' | 'icon';
  className?: string;
  iconSize?: number;
  textColor?: string;
  mono?: boolean;
}

export const LogoPremium: React.FC<LogoPremiumProps> = ({
  concept = 'g-tee',  // Default to new artistic G logo
  variant = 'full',
  className = '',
  iconSize = 32,
  textColor = '#0f172a',
  mono = false,
}) => {
  const color = mono ? 'currentColor' : '#16a34a';

  // Render icon based on concept
  const renderIcon = (size: number) => {
    const scale = size / 48; // Base size is 48px

    switch (concept) {
      case 'dimple':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="2" fill="none"/>
            <circle cx="24" cy="6" r="2.2" fill={color}/>
            <circle cx="42" cy="24" r="2.2" fill={color}/>
            <circle cx="24" cy="42" r="2.2" fill={color}/>
            <circle cx="6" cy="24" r="2.2" fill={color}/>
            <circle cx="30.5" cy="9" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="37" cy="14.5" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="37" cy="33.5" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="30.5" cy="39" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="17.5" cy="39" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="11" cy="33.5" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="11" cy="14.5" r="1.6" fill={color} opacity="0.7"/>
            <circle cx="17.5" cy="9" r="1.6" fill={color} opacity="0.7"/>
            <line x1="24" y1="24" x2="18" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="2" fill={color}/>
          </svg>
        );

      case 'orbital':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1.5" fill="none"/>
            <line x1="24" y1="4" x2="24" y2="7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="44" y1="24" x2="40.5" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="24" y1="44" x2="24" y2="40.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4" y1="24" x2="7.5" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="7" fill={color}/>
            {!mono && (
              <>
                <circle cx="24" cy="21" r="1.2" fill="white" opacity="0.35"/>
                <circle cx="21.5" cy="24" r="1.2" fill="white" opacity="0.35"/>
                <circle cx="26.5" cy="24" r="1.2" fill="white" opacity="0.35"/>
                <circle cx="22.5" cy="26.5" r="1" fill="white" opacity="0.25"/>
                <circle cx="25.5" cy="26.5" r="1" fill="white" opacity="0.25"/>
              </>
            )}
          </svg>
        );

      case 'spinner':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified spinner segments for component */}
            <path d="M 24 4 L 28.3 5.7 L 24 8 Z" fill={color} opacity="1.0"/>
            <path d="M 28.3 5.7 L 32.9 9 L 28 12 Z" fill={color} opacity="0.95"/>
            <path d="M 32.9 9 L 36.5 13.5 L 30.5 16 Z" fill={color} opacity="0.85"/>
            <path d="M 36.5 13.5 L 39 18.3 L 32 20 Z" fill={color} opacity="0.75"/>
            <path d="M 39 18.3 L 40 24 L 32 24 Z" fill={color} opacity="0.65"/>
            <path d="M 40 24 L 39 29.7 L 32 28 Z" fill={color} opacity="0.55"/>
            <path d="M 39 29.7 L 36.5 34.5 L 30.5 32 Z" fill={color} opacity="0.45"/>
            <path d="M 36.5 34.5 L 32.9 39 L 28 36 Z" fill={color} opacity="0.35"/>
            <circle cx="24" cy="24" r="6" fill="white"/>
            <circle cx="24" cy="24" r="5" fill={color}/>
          </svg>
        );

      case 'tee':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="2" fill="none"/>
            <line x1="24" y1="6" x2="24" y2="9.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <line x1="42" y1="24" x2="38.5" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <line x1="24" y1="42" x2="24" y2="38.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="24" x2="9.5" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M 24 24 L 22.5 14 Q 22.5 12.5 24 12.5 Q 25.5 12.5 25.5 14 L 24 24"
                  fill={color} stroke={color} strokeWidth="0.5"/>
            <circle cx="24" cy="11" r="3.5" fill={color}/>
            {!mono && (
              <>
                <circle cx="24" cy="9.5" r="0.7" fill="white" opacity="0.4"/>
                <circle cx="22.5" cy="11" r="0.7" fill="white" opacity="0.4"/>
                <circle cx="25.5" cy="11" r="0.7" fill="white" opacity="0.4"/>
              </>
            )}
            <circle cx="24" cy="24" r="2" fill={color}/>
          </svg>
        );

      case 'g-tee':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Artistic "G" letter with brush stroke style */}
            <path
              d="M 38 14 C 38 8 32 4 24 4 C 14 4 6 12 6 24 C 6 36 14 44 24 44 C 32 44 38 38 38 32 L 38 24 L 26 24"
              stroke={color}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Golf ball on tee inside the G */}
            <g transform="translate(24, 26)">
              {/* Golf ball */}
              <circle cx="0" cy="0" r="5" fill="#f5f5dc" stroke={color} strokeWidth="0.5"/>
              {/* Dimples in gold */}
              <circle cx="-1.5" cy="-1" r="0.8" fill="#d4af37" opacity="0.6"/>
              <circle cx="1.5" cy="-1" r="0.8" fill="#d4af37" opacity="0.6"/>
              <circle cx="0" cy="1" r="0.8" fill="#d4af37" opacity="0.6"/>
              <circle cx="-2" cy="1.5" r="0.6" fill="#d4af37" opacity="0.5"/>
              <circle cx="2" cy="1.5" r="0.6" fill="#d4af37" opacity="0.5"/>

              {/* Tee */}
              <line x1="0" y1="5.5" x2="0" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M -2 10 L 2 10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          </svg>
        );

      case 'shield':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shield outline in gold */}
            <path
              d="M 24 4 L 40 10 L 40 24 C 40 32 34 40 24 44 C 14 40 8 32 8 24 L 8 10 Z"
              stroke="#c9a961"
              strokeWidth="2"
              fill="none"
            />

            {/* Golf ball in center */}
            <circle cx="24" cy="20" r="6" fill="white" stroke={color} strokeWidth="1.5"/>
            {/* Dimples */}
            <circle cx="22" cy="18" r="0.8" fill={color} opacity="0.3"/>
            <circle cx="26" cy="18" r="0.8" fill={color} opacity="0.3"/>
            <circle cx="24" cy="21" r="0.8" fill={color} opacity="0.3"/>
            <circle cx="21" cy="21" r="0.7" fill={color} opacity="0.25"/>
            <circle cx="27" cy="21" r="0.7" fill={color} opacity="0.25"/>

            {/* Tee below ball */}
            <line x1="24" y1="26" x2="24" y2="32" stroke={color} strokeWidth="1.5"/>
            <line x1="21" y1="32" x2="27" y2="32" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>

            {/* Crossed golf clubs */}
            {/* Left club */}
            <g transform="rotate(-25 24 24)">
              <ellipse cx="12" cy="12" rx="3" ry="2.5" fill={color}/>
              <line x1="13" y1="13" x2="20" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            </g>

            {/* Right club */}
            <g transform="rotate(25 24 24)">
              <ellipse cx="36" cy="12" rx="3" ry="2.5" fill={color}/>
              <line x1="35" y1="13" x2="28" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            </g>
          </svg>
        );

      case 'crossed-clubs':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arc/hill at bottom */}
            <path
              d="M 6 36 Q 24 28 42 36"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Golf ball on tee */}
            <circle cx="24" cy="20" r="5" fill="white" stroke={color} strokeWidth="2"/>
            {/* Dimples */}
            <circle cx="22" cy="18" r="0.7" fill={color} opacity="0.3"/>
            <circle cx="26" cy="18" r="0.7" fill={color} opacity="0.3"/>
            <circle cx="24" cy="21" r="0.7" fill={color} opacity="0.3"/>
            <circle cx="21.5" cy="21" r="0.6" fill={color} opacity="0.25"/>
            <circle cx="26.5" cy="21" r="0.6" fill={color} opacity="0.25"/>

            {/* Tee */}
            <line x1="24" y1="25" x2="24" y2="30" stroke={color} strokeWidth="1.5"/>
            <line x1="22" y1="30" x2="26" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>

            {/* Left crossed club */}
            <g>
              <ellipse cx="14" cy="8" rx="2.5" ry="2" fill={color} transform="rotate(-35 14 8)"/>
              <line x1="15" y1="9" x2="22" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
            </g>

            {/* Right crossed club */}
            <g>
              <ellipse cx="34" cy="8" rx="2.5" ry="2" fill={color} transform="rotate(35 34 8)"/>
              <line x1="33" y1="9" x2="26" y2="30" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  const renderText = (fontSize: number) => (
    <span
      className="font-semibold tracking-tight"
      style={{
        color: textColor,
        fontSize: `${fontSize}px`,
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}
    >
      Golf<span className="font-bold">Booker</span>
    </span>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex ${className}`}>{renderIcon(iconSize)}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        {renderIcon(iconSize)}
        {renderText(iconSize * 0.5)}
      </div>
    );
  }

  // Full horizontal logo (default)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {renderIcon(iconSize)}
      {renderText(iconSize * 0.625)}
    </div>
  );
};
