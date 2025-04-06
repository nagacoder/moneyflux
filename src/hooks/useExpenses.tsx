'use client';

import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { getTransactions } from '@/lib/api';
import { formatDate, getMonthBounds } from '@/lib/utils';
import { Transaction, CategoryData } from '@/types';

export function useExpenses() {
  const { 
    apiKey, 
    currentDate, 
    expenses, 
    setExpenses, 
    setIsLoading, 
    disabledCategories,
    assignCategoryColors
  } = useAppContext();

  const response ={"status":"success","data":[{"id":"TXN-1743929483288","date":"2025-04-01T08:51:22.000Z","type":"expense","category":"Makanan","amount":191000,"description":"Rechesee","created at":"2025-04-06T08:51:23.288Z","updated at":"2025-04-06T08:51:23.288Z"},{"id":"TXN-1743929522152","date":"2025-04-02T08:52:01.000Z","type":"expense","category":"Groceries","amount":254390,"description":"Belanja bulanan","created at":"2025-04-06T08:52:02.152Z","updated at":"2025-04-06T08:52:02.152Z"},{"id":"TXN-1743929553050","date":"2025-04-03T08:52:31.000Z","type":"expense","category":"Aqua Galon","amount":46000,"description":"Air galon","created at":"2025-04-06T08:52:33.050Z","updated at":"2025-04-06T08:52:33.050Z"},{"id":"TXN-1743929581292","date":"2025-04-05T08:53:00.000Z","type":"expense","category":"Transportasi","amount":26000,"description":"Gojek","created at":"2025-04-06T08:53:01.292Z","updated at":"2025-04-06T08:53:01.292Z"},{"id":"TXN-1743929615757","date":"2025-04-04T08:53:34.000Z","type":"expense","category":"Groceries","amount":139890,"description":"Belanja bulanan","created at":"2025-04-06T08:53:35.758Z","updated at":"2025-04-06T08:53:35.758Z"},{"id":"TXN-1743929682259","date":"2025-04-05T08:54:40.000Z","type":"expense","category":"Lain-Lain","amount":35000,"description":"Cukur","created at":"2025-04-06T08:54:42.259Z","updated at":"2025-04-06T08:54:42.259Z"}]}
  
  const [monthExpenses, setMonthExpenses] = useState<Transaction[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async (): Promise<void> => {
    if (!apiKey) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { start, end } = getMonthBounds(currentDate);
      const transactions = response.data as Transaction[]
    //   const transactions = await getTransactions(
    //     apiKey,
    //     formatDate(start),
    //     formatDate(end),
    //     'expense'
    //   );
      
      setExpenses(transactions);
      
      // Get unique categories for color assignment
      const uniqueCategories = [...new Set(transactions.map(exp => exp.category))];
      assignCategoryColors(uniqueCategories);
    } catch (err) {
      console.error('Error fetching expenses:', err);
      setError('Failed to load expenses. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Process expenses for the current month
  useEffect(() => {
    if (!expenses || expenses.length === 0) return;
    
    // Filter expenses for the current month
    const { start, end } = getMonthBounds(currentDate);
    const filtered = expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate >= start && expDate <= end;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setMonthExpenses(filtered);
  }, [expenses, currentDate]);

  // Calculate category breakdown
  useEffect(() => {
    if (!monthExpenses || monthExpenses.length === 0) {
      setCategoryData([]);
      return;
    }
    
    const categoryTotals: Record<string, number> = {};
    let totalAmount = 0;
    
    monthExpenses.forEach(exp => {
      if (!disabledCategories.has(exp.category)) {
        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
        totalAmount += exp.amount;
      }
    });
    
    const data = Object.entries(categoryTotals)
      .map(([category, total]) => ({
        category,
        total,
        percentage: totalAmount > 0 ? (total / totalAmount) * 100 : 0
      }))
      .sort((a, b) => b.total - a.total);
    
    setCategoryData(data);
  }, [monthExpenses, disabledCategories]);

  return {
    monthExpenses,
    categoryData,
    fetchExpenses,
    error
  };
}