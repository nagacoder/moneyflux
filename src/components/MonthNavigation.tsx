'use client';

import { useAppContext } from '@/context/AppContext';
import {ChevronLeft,ChevronRight} from 'lucide-react'
import { formatMonth } from '@/lib/utils';

interface MonthNavigationProps {
  onMonthChange?: (date: Date) => void;
}

export default function MonthNavigation({ onMonthChange }: MonthNavigationProps) {
  const { currentDate, setCurrentDate } = useAppContext();
  
  const goToPreviousMonth = (): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    
    setCurrentDate(newDate);
    if (onMonthChange) onMonthChange(newDate);
  };
  
  const goToNextMonth = (): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
    if (onMonthChange) onMonthChange(newDate);
  };
  
  // Check if current month is the actual current month
  const now = new Date();
  const isCurrentMonth = 
    currentDate.getMonth() === now.getMonth() && 
    currentDate.getFullYear() === now.getFullYear();
  
  return (
    <div className="month-navigation">
      <button 
        onClick={goToPreviousMonth} 
        className="nav-button"
      >
         <ChevronLeft color='#04A46C'/>
      </button>
      <div className="current-month">
        {formatMonth(currentDate)}
      </div>
      <button 
        onClick={goToNextMonth} 
        className="nav-button" 
        disabled={isCurrentMonth}
      >
        <ChevronRight color='#04A46C'/>
      </button>
    </div>
  );
}