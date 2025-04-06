'use client';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { getISODateWithLocalTime, formatDateForInput } from '@/lib/utils';
import { createTransaction } from '@/lib/api';
import { ExpenseFormData, NotificationMessage, Category } from '@/types';

interface TransactionFormProps {
 onSuccess:()=>void
}

export default function TransactionForm({onSuccess}:TransactionFormProps) {
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(true);
    const { apiKey, categories,setIsLoading } = useAppContext();
    const [formData, setFormData] = useState<ExpenseFormData>({
        name: '',
        category: '',
        transaction_type: 'expense',
        amount: '',
        date: formatDateForInput(new Date())
    });
    const [message, setMessage] = useState<NotificationMessage>({ text: '', type: '' });

    // Reset the form
    const resetForm = (): void => {
        setFormData({
            name: '',
            category: '',
            transaction_type: 'expense',
            amount: '',
            date: formatDateForInput(new Date())
        });
    };

    // Handle form submission
    const handleSubmit = async (): Promise<void> => {
        setIsPinModalOpen(false)
        setIsLoading(true)
       

        if (!apiKey) {
            setMessage({ text: 'Please set up your PIN first', type: 'error' });
            return;
        }

        try {
            const transactionData = {
                type: formData.transaction_type,
                amount: parseFloat(formData.amount),
                category: formData.category,
                date: getISODateWithLocalTime(formData.date),
                description: formData.name
            };

            await createTransaction(apiKey, transactionData);

            setMessage({ text: 'Transaction added successfully!', type: 'success' });
            resetForm();


        } catch (error) {
            let errorMessage = 'Failed to add transaction';
            if (error instanceof Error) {
                errorMessage = error.message;
            }

            setMessage({
                text: `Error: ${errorMessage}`,
                type: 'error'
            });
        }

        // Clear message after 3 seconds
        setTimeout(() => {
            onSuccess()
            setMessage({ text: '', type: '' });
        }, 3000);
    };

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    return <Modal
        isOpen={isPinModalOpen}
        title='Add Transaction'
        onClose={() => setIsPinModalOpen(false)}
        onConfirm={() => handleSubmit()}
    >
        <div className="form-container">
            <form id="expenseForm" className="expense-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">categories</option>
                        {categories.map((cat: Category) => (
                            <option key={cat.name} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_type">Type</label>
                    <select
                        id="transaction_type"
                        value={formData.transaction_type}
                        onChange={handleChange}
                        required
                    >
                        <option value="expense">Expenses</option>
                        <option value="income">Incomes</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        step="0.01"
                        min="0.01"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>

            {message.text && (
                <div className={`form-message ${message.type}`}>
                    {message.text}
                </div>
            )}
        </div>
    </Modal>
}