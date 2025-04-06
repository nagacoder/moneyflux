'use client';

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { Home, Plus, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
      const { toggleNewTransaction,isNewTransactionModalOpen, } = useAppContext();
  const pathname = usePathname();
  
  return (
    <footer className="footer">
      <div className="nav-container">
        <Link 
          href="/" 
          className={`nav-item ${pathname === '/' ? 'active' : ''}`}
        >
          <Home size={24} />
          <span className="nav-label">Home</span>
        </Link>
        <div 
          onClick={()=>toggleNewTransaction(isNewTransactionModalOpen)}
          className={`nav-item ${pathname === '/table' ? 'active' : ''}`}
        >
          <Plus size={24} />
          <span className="nav-label">Add d</span>
        </div>
        <Link 
          href="/settings" 
          className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}
        >
          <Settings size={24} />
          <span className="nav-label">Settings</span>
        </Link>
      </div>
    </footer>
  );
}