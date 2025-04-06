'use client';

interface LoaderProps {
  isActive: boolean;
}

export default function Summary() {
//   if (!isActive) return null;
  
  return (
    <div className="balance-card">
  <div className="balance-section">
    <div className="balance-label">Total sisa balance</div>
    <div className="balance-amount">IDR 0,-</div>
  </div>
  <div className="transaction-summary">
    <div className="transaction-section">
      <div className="transaction-label">Income</div>
      <div className="transaction-amount">IDR 0,-</div>
    </div>
    <div className="transaction-divider"></div>
    <div className="transaction-section">
      <div className="transaction-label">Expenses</div>
      <div className="transaction-amount">IDR 0,-</div>
    </div>
  </div>
</div>
  );
}