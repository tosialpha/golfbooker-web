import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screens = [
  {
    id: 'home',
    title: 'Demo Golf Club',
    subtitle: 'Helsinki',
    location: 'Helsinki',
    buttonText: 'Varaa Nyt',
    buttonIcon: '📅',
    hasCompetitions: true,
  },
  {
    id: 'booking',
    title: 'Valitse Aika',
    subtitle: 'Demo Golf Club - Helsinki',
    times: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
    buttonText: 'Jatka',
  },
  {
    id: 'confirmation',
    title: 'Vahvistus',
    subtitle: 'Varauksesi on vahvistettu',
    details: {
      club: 'Demo Golf Club',
      date: 'Tänään',
      time: '10:30',
      players: '1-4 pelaajaa',
    },
    buttonText: 'Valmis',
  },
];

export const BookingDemo: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string>('10:30');

  const handleNext = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    handleNext();
  };

  const screen = screens[currentScreen];

  return (
    <div className="w-full h-full bg-white relative" onClick={handleNext}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          {screen.id === 'home' && (
            <div className="w-full h-full flex flex-col">
              {/* Hero Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop"
                  alt="Golf Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
                <div className="absolute top-0 left-0 right-0 pt-14 px-6 text-white">
                  <div className="text-sm font-medium opacity-90 mb-1">{screen.title}</div>
                  <h1 className="text-2xl font-bold mb-1">{screen.subtitle}</h1>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <span>📍</span>
                    <span>{screen.location}</span>
                  </div>
                </div>
              </div>

              {/* Competitions Section */}
              {screen.hasCompetitions && (
                <div className="mt-8 px-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🏆</span>
                    <h2 className="text-lg font-semibold">Käynnissä olevat kilpailut</h2>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-orange-50 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1000&auto=format&fit=crop"
                        alt="Golf Course"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        KÄYNNISSÄ
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/90 text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
                        <span>📅</span>
                        <span>15.11</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">Helsinki Syyskilpailu</h3>
                      <p className="text-sm text-gray-600 mb-3">25.4€</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-500">
                          <span>📍 Demo Golf Club</span>
                          <span>👥 24 pelaajaa</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Booking Button */}
              <div className="px-6 mt-auto mb-48">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-colors"
                >
                  <span className="text-xl">{screen.buttonIcon}</span>
                  <span className="text-lg">{screen.buttonText}</span>
                  <span className="ml-auto text-xl">→</span>
                </motion.button>
              </div>
            </div>
          )}

          {screen.id === 'booking' && (
            <div className="w-full h-full flex flex-col p-6 pt-16">
              <h1 className="text-2xl font-bold mb-2">{screen.title}</h1>
              <p className="text-gray-600 text-sm mb-8">{screen.subtitle}</p>

              <div className="space-y-3 flex-1">
                {screen.times?.map((time, index) => (
                  <motion.button
                    key={time}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTimeSelect(time);
                    }}
                    className="w-full bg-white border-2 border-gray-200 hover:border-green-500 rounded-xl py-4 px-6 text-left transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{time}</span>
                      <span className="text-green-600 text-sm font-medium">Saatavilla</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-colors mt-auto mb-20"
              >
                {screen.buttonText}
              </motion.button>
            </div>
          )}

          {screen.id === 'confirmation' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
              >
                <span className="text-4xl">✓</span>
              </motion.div>

              <h1 className="text-2xl font-bold mb-2">{screen.title}</h1>
              <p className="text-gray-600 text-center mb-8">{screen.subtitle}</p>

              <div className="w-full bg-gray-50 rounded-2xl p-6 space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kenttä</span>
                  <span className="font-semibold">{screen.details?.club}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Päivä</span>
                  <span className="font-semibold">{screen.details?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aika</span>
                  <span className="font-semibold">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pelaajat</span>
                  <span className="font-semibold">{screen.details?.players}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-colors">
                {screen.buttonText}
              </button>

              {/* Demo Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-center text-yellow-800">
                  ⚠️ Tämä on vain demo-esittely. Varausta ei ole tehty oikeasti.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentScreen(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentScreen
                ? 'bg-green-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
