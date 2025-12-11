import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TIME_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

interface SelectedSlot {
  date: string;
  time: string;
}

interface DemoBookingCalendarProps {
  onSlotSelect?: (slot: SelectedSlot | null) => void;
  selectedSlot?: SelectedSlot | null;
  compact?: boolean;
}

export const DemoBookingCalendar: React.FC<DemoBookingCalendarProps> = ({
  onSlotSelect,
  selectedSlot: externalSelectedSlot,
  compact = false,
}) => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';

  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Monday
    const monday = new Date(today);
    monday.setDate(today.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  });

  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(null);
  const [internalSelectedTime, setInternalSelectedTime] = useState<string | null>(null);

  // Use external state if provided, otherwise use internal
  const selectedDate = externalSelectedSlot
    ? new Date(externalSelectedSlot.date)
    : internalSelectedDate;
  const selectedTime = externalSelectedSlot?.time || internalSelectedTime;

  const weekdays = [
    t('booking.weekdays.mon'),
    t('booking.weekdays.tue'),
    t('booking.weekdays.wed'),
    t('booking.weekdays.thu'),
    t('booking.weekdays.fri'),
  ];

  const getWeekDates = () => {
    const dates: Date[] = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const goToPreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() - 7);
    // Don't allow going before current week
    if (newStart >= today || newStart.getTime() + 4 * 24 * 60 * 60 * 1000 >= today.getTime()) {
      setCurrentWeekStart(newStart);
    }
  };

  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() + 7);
    // Allow up to 8 weeks ahead
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 56);
    if (newStart < maxDate) {
      setCurrentWeekStart(newStart);
    }
  };

  const isDateDisabled = (date: Date) => {
    const dateOnly = new Date(date);
    dateOnly.setHours(0, 0, 0, 0);
    return dateOnly < today;
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
    );
  };

  const isToday = (date: Date) => {
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  const formatDate = (date: Date) => {
    return date.getDate().toString();
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString(isEnglish ? 'en-US' : 'fi-FI', { month: 'short' });
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    const dateStr = date.toISOString().split('T')[0];

    if (onSlotSelect) {
      if (selectedTime) {
        onSlotSelect({ date: dateStr, time: selectedTime });
      } else {
        setInternalSelectedDate(date);
        onSlotSelect(null);
      }
    } else {
      setInternalSelectedDate(date);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (!selectedDate) return;

    const dateStr = selectedDate.toISOString().split('T')[0];

    if (onSlotSelect) {
      onSlotSelect({ date: dateStr, time });
    } else {
      setInternalSelectedTime(time);
    }
  };

  const canGoPrevious = () => {
    const prevWeekEnd = new Date(currentWeekStart);
    prevWeekEnd.setDate(currentWeekStart.getDate() - 3);
    return prevWeekEnd >= today;
  };

  return (
    <div className={`space-y-4 ${compact ? '' : 'bg-gray-50 rounded-lg p-4'}`}>
      {/* Date Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar size={14} className="inline mr-1" />
          {t('booking.selectDate')}
        </label>

        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={goToPreviousWeek}
            disabled={!canGoPrevious()}
            className="p-1.5 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={t('booking.previousWeek')}
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm font-medium text-gray-700">
            {formatMonth(weekDates[0])} {weekDates[0].getFullYear()}
          </span>

          <button
            type="button"
            onClick={goToNextWeek}
            className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label={t('booking.nextWeek')}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Weekday Headers & Date Buttons */}
        <div className="grid grid-cols-5 gap-2">
          {weekdays.map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-gray-500 mb-1">{day}</div>
              <button
                type="button"
                onClick={() => handleDateSelect(weekDates[index])}
                disabled={isDateDisabled(weekDates[index])}
                className={`
                  w-full aspect-square rounded-lg text-sm font-medium transition-all
                  flex items-center justify-center
                  ${isDateDisabled(weekDates[index])
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : isDateSelected(weekDates[index])
                      ? 'bg-brand-green-600 text-white shadow-md'
                      : isToday(weekDates[index])
                        ? 'bg-brand-green-100 text-brand-green-700 hover:bg-brand-green-200'
                        : 'bg-white border border-gray-200 hover:border-brand-green-500 hover:shadow-sm'
                  }
                `}
              >
                {formatDate(weekDates[index])}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slot Selection */}
      <AnimatePresence>
        {selectedDate && !isDateDisabled(selectedDate) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={14} className="inline mr-1" />
              {t('booking.selectTime')}
            </label>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    py-2 px-3 rounded-lg text-sm font-medium transition-all
                    ${selectedTime === time
                      ? 'bg-brand-green-600 text-white shadow-md'
                      : 'bg-white border border-gray-200 hover:border-brand-green-500 hover:shadow-sm'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-brand-green-700 bg-brand-green-50 px-3 py-2 rounded-lg"
        >
          <CheckCircle size={16} />
          <span>
            {selectedDate.toLocaleDateString(isEnglish ? 'en-US' : 'fi-FI', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}{' '}
            {isEnglish ? 'at' : 'klo'} {selectedTime}
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default DemoBookingCalendar;
