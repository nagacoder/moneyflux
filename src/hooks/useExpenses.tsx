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

  
  const [monthExpenses, setMonthExpenses] = useState<Transaction[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async (): Promise<void> => {
    if (!apiKey) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { start, end } = getMonthBounds(currentDate);
      // const transactions = response.data as Transaction[]
      const transactions = await getTransactions(
        apiKey,
        formatDate(start),
        formatDate(end),
        'expense'
      );
      
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

  const createTransaction = async (): Promise<void> => {
    if (!apiKey) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { start, end } = getMonthBounds(currentDate);
      // const transactions = response.data as Transaction[]
      const transactions = await getTransactions(
        apiKey,
        formatDate(start),
        formatDate(end),
        'expense'
      );
      
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