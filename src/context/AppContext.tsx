'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppContextState, Transaction, Category } from '@/types';

const AppContext = createContext<AppContextState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [expenses, setExpenses] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);
  const [disabledCategories, setDisabledCategories] = useState<Set<string>>(new Set());
  const [categoryColors, setCategoryColors] = useState<Record<string, string>>({});
  const [currencySymbol, setCurrencySymbol] = useState<string>('Rp');
  
  // Color palette for categories
  const colorPalette: string[] = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFBE0B', '#FF006E', '#8338EC', '#3A86FF',
    '#FB5607', '#38B000', '#9B5DE5', '#F15BB5'
  ];

  useEffect(() => {
    // Check for stored PIN on initial load
    if (typeof window !== 'undefined') {
      const storedPin = localStorage.getItem('moneyflux_pin');
      if (storedPin) {
        setApiKey(storedPin);
      }
    }
  }, []);

  const assignCategoryColors = (categories: string[]): void => {
    const newColors = { ...categoryColors };
    categories.forEach((category, index) => {
      if (!newColors[category]) {
        newColors[category] = colorPalette[index % colorPalette.length];
      }
    });
    setCategoryColors(newColors);
  };

  const toggleCategory = (category: string): void => {
    setDisabledCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };



  const savePin = (pin: string): void => {
    if (typeof window !== 'undefined' && pin) {
      localStorage.setItem('moneyflux_pin', pin);
      setApiKey(pin);
    }
  };

  const toggleNewTransaction = (status:boolean) =>{
    setIsNewTransactionModalOpen(!status)
  }

  const contextValue: AppContextState = {
    apiKey,
    setApiKey,
    currentDate,
    setCurrentDate,
    expenses,
    setExpenses,
    categories,
    setCategories,
    isLoading,
    isNewTransactionModalOpen,
    toggleNewTransaction,
    setIsLoading,
    disabledCategories,
    toggleCategory,
    categoryColors,
    assignCategoryColors,
    currencySymbol,
    setCurrencySymbol,
    savePin
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextState {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}