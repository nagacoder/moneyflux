'use client';

import { useAppContext } from '@/context/AppContext';
import { formatCurrency } from '@/lib/utils';
import { CategoryData, Transaction } from '@/types';

interface CategoryLegendProps {
  categoryData: CategoryData[];
  monthExpenses: Transaction[];
}

export default function CategoryLegend({ categoryData, monthExpenses }: CategoryLegendProps) {
  const { categoryColors, disabledCategories, toggleCategory, currencySymbol } = useAppContext();
  
  if (!monthExpenses || monthExpenses.length === 0) {
    return (
      <div className="legend-box" id="customLegend">
        <div className="no-data">No expenses recorded for this month</div>
      </div>
    );
  }
  
  // Get unique categories from current month's expenses
  const currentMonthCategories = [...new Set(monthExpenses.map(exp => exp.category))];
  
  // Create a map of active category data for easy lookup
  const categoryMap = new Map(categoryData.map(cat => [cat.category, cat]));
  
  // Sort categories by total amount
  const sortedCategories = currentMonthCategories.sort((a, b) => {
    const dataA = categoryMap.get(a);
    const dataB = categoryMap.get(b);
    if (dataA && dataB) return dataB.total - dataA.total;
    if (dataA) return -1;
    if (dataB) return 1;
    return a.localeCompare(b);
  });
  
  // Calculate totals
  
  return (
    <div className="legend-box" id="customLegend">
      <h2>Categories</h2>
      
      {sortedCategories.map(category => {
        const categoryInfo = categoryMap.get(category);
        const color = categoryColors[category];
        const percentage = categoryInfo ? ` (${categoryInfo.percentage.toFixed(1)}%)` : '';
        const amount = categoryInfo ? formatCurrency(categoryInfo.total, currencySymbol) : '';
        
        return (
          <div 
            key={category} 
            className={`legend-item ${disabledCategories.has(category) ? 'disabled' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            <div className="color-box" style={{ backgroundColor: color }}></div>
            <div className="legend-text">
              <span>{category}{percentage}</span>
              <span className="amount">{amount}</span>
            </div>
          </div>
        );
      })}
      
      <div style={{ 
        marginTop: '1.5rem', 
        paddingTop: '1rem', 
        borderTop: '1px solid var(--border)' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}></div>
        </div>
        </div>
        )
    }