'use client';
import { formatCurrency } from '@/lib/utils';
interface SummaryProps {
  balance: number;
  totalIncome: number;
  totalExpenses: number;
}

export default function Summary({balance,totalIncome,totalExpenses}:SummaryProps) {
//   if (!isActive) return null;
  
  return (
    <div className="balance-card">
  <div className="balance-section">
    <div className="balance-label">Balance</div>
    <div className="balance-amount">{formatCurrency(balance)}</div>
  </div>
  <div className="transaction-summary">
    <div className="transaction-section">
      <div className="transaction-label">Income</div>
      <div className="transaction-amount">{formatCurrency(totalIncome)}</div>
    </div>
    <div className="transaction-divider"></div>
    <div className="transaction-section">
      <div className="transaction-label">Expenses</div>
      <div className="transaction-amount">{formatCurrency(totalExpenses)}</div>
    </div>
  </div>
</div>
  );
}