'use client';

import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';


interface ModalProps {
  isOpen: boolean;
  title:string;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode
}

export default function Modal({ isOpen,title, onClose,children, onConfirm }: ModalProps) {
  
 if(!isOpen) return
  return (
    <div className="modal active">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <div className="modal-buttons">
          <button 
            className="modal-button" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="modal-button confirm" 
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}