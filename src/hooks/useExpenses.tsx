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
    setIncomes,
    incomes,
    setIsLoading, 
    disabledCategories,
    assignCategoryColors
  } = useAppContext();

  
  const [monthExpenses, setMonthExpenses] = useState<Transaction[]>([]);
  const [monthTransactions, setMonthTransactions] = useState<Transaction[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async (newDate?:Date): Promise<void> => {
    if (!apiKey) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const date = newDate ? newDate :currentDate
      const { start, end } = getMonthBounds(date);
      // const transactions = response.data as Transaction[]
      const transactions = await getTransactions(
        apiKey,
        formatDate(start),
        formatDate(end),
      );
      const expensesResponse = transactions.filter(item => item.type =='expense') || []
      const incomesResponse = transactions.filter(item => item.type == 'income')
      setIncomes(incomesResponse)
      setExpenses(expensesResponse);
      
      // Get unique categories for color assignment
      const uniqueCategories = [...new Set(expensesResponse.map(exp => exp.category))];
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
    const combinedTransaction = [...filtered,...incomes]
    setMonthTransactions(combinedTransaction)
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
    monthTransactions,
    monthExpenses,
    incomes,
    categoryData,
    fetchExpenses,
    error
  };
}