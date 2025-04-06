'use client';
import {Trash2} from 'lucide-react'
import {Transaction} from '@/types'

interface TransactionListProps {
    openDeleteModal:(id:string)=>void
    transactions:Transaction[]
}

export default function TransactionList({transactions,openDeleteModal}:TransactionListProps) {
    //   if (!isActive) return null;

    return (
        <div className="tableContainer">
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item:Transaction) => (
                        <tr key={item.id} className={item.type === 'income' ? 'income-row' : 'expense-row'}>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td>{item.type === 'income' ? 'Income' : 'Expense'}</td>
                            <td>${item.amount.toFixed(2)}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => openDeleteModal(item.id || '')} className="delete-btn">
                                    <Trash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}