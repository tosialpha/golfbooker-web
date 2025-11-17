import React, { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Desktop: Phone Frame */}
      <div className="hidden md:block relative w-[375px] h-[812px] bg-black rounded-[3rem] shadow-2xl p-3">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent z-10 flex items-center justify-between px-6 pt-2 text-xs">
            <span className="font-semibold">14:19</span>
            <div className="flex items-center gap-1">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Content */}
          <div className="w-full h-full">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Mobile: Full Screen */}
      <div className="md:hidden w-full h-screen">
        {children}
      </div>
    </div>
  );
};
