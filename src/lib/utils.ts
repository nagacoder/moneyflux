import { Transaction, CategoryData } from '@/types';

// Format currency with the appropriate symbol
export function formatCurrency(amount: number, currencySymbol: string = 'Rp'): string {
  const formattedAmount = new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  }).format(amount);
  
  // Currencies commonly used after the amount
  const postfixCurrencies = new Set(['kr', 'kr.', 'Fr', 'zł']);
  
  if (postfixCurrencies.has(currencySymbol)) {
    return `${formattedAmount} ${currencySymbol}`;
  }
  return `${currencySymbol} ${formattedAmount}`;
}

// Format a date as YYYY-MM-DD
export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Format month name with year for display
export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: getUserTimeZone()
  });
}

// Get the user's timezone
export function getUserTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Get start and end dates for a given month
export function getMonthBounds(date: Date): { start: Date; end: Date } {
  const localDate = new Date(date);
  const startLocal = new Date(localDate.getFullYear(), localDate.getMonth(), 1);
  const endLocal = new Date(localDate.getFullYear(), localDate.getMonth() + 1, 0, 23, 59, 59, 999);
  const start = new Date(startLocal.toISOString());
  const end = new Date(endLocal.toISOString());
  return { start, end };
}

// Filter expenses for the current month
export function getMonthExpenses(expenses: Transaction[], currentDate: Date): Transaction[] {
  const { start, end } = getMonthBounds(currentDate);
  return expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return expDate >= start && expDate <= end;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Calculate breakdown of expenses by category
export function calculateCategoryBreakdown(
  expenses: Transaction[], 
  disabledCategories: Set<string>
): CategoryData[] {
  const categoryTotals: Record<string, number> = {};
  let totalAmount = 0;
  
  expenses.forEach(exp => {
    if (!disabledCategories.has(exp.category)) {
      categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
      totalAmount += exp.amount;
    }
  });
  
  return Object.entries(categoryTotals)
    .map(([category, total]) => ({
      category,
      total,
      percentage: totalAmount > 0 ? (total / totalAmount) * 100 : 0
    }))
    .sort((a, b) => b.total - a.total);
}

// Get ISO date with local time
export function getISODateWithLocalTime(dateInput: string): string {
  const [year, month, day] = dateInput.split('-').map(Number);
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const localDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
  return localDateTime.toISOString();
}

// Format date for input field (YYYY-MM-DD)
export function formatDateForInput(date: Date): string {
  return date.toISOString().split('T')[0];
}