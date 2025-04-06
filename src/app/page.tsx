'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { useExpenses } from '@/hooks/useExpenses';
import { useCategories } from '@/hooks/useCategories';
import Header from '@/components/Footer';
import Summary from '@/components/Summary'
import Loader from '@/components/Loader';
import MonthNavigation from '@/components/MonthNavigation';
import PieChart from '@/components/PieChart';
import CategoryLegend from '@/components/CategoryLegend';
import TransactionForm from '@/components/TransactionForm';
import SetPin from '@/components/SetupPin';
import TransactionList from '@/components/TransactionList'
import DeleteTransaction from '@/components/DeleteTransaction';
export default function Dashboard() {
    const { isLoading, isNewTransactionModalOpen, apiKey } = useAppContext();
    const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
    const [isShowTransactionForm, setSsShowTransactionForm] = useState<boolean>(false);
    const { monthExpenses, categoryData, fetchExpenses, error: expensesError } = useExpenses();
    const { fetchCategories, error: categoriesError } = useCategories();

    // Open PIN modal if no API key is found
    // useEffect(() => {
    //     if (apiKey === null) {
    //         setIsPinModalOpen(false);
    //     }
    // }, [apiKey]);


    useEffect(() => {
        console.log('isNewTransactionModalOpen',isNewTransactionModalOpen)
        setSsShowTransactionForm(isNewTransactionModalOpen);
    }, [isNewTransactionModalOpen]);

    // Fetch data on initial load
    useEffect(() => {
        const initialize = async () => {
            if (apiKey) {
                await Promise.all([
                    fetchCategories(),
                    fetchExpenses()
                ]);
            }
        };

        initialize();
    }, [apiKey]);

    // Handle month change
    const handleMonthChange = async () => {
        if (apiKey) {
            await fetchExpenses();
        }
    };

    // Handle transaction added
    const handleTransactionAdded = async () => {
        if (apiKey) {
            await fetchExpenses();
        }
    };

    return (
        <div className="container">
            <Summary />
            <Loader isActive={isLoading} />

            <MonthNavigation onMonthChange={handleMonthChange} />

            <div className="chart-container">
                <PieChart categoryData={categoryData} />
                <CategoryLegend
                    categoryData={categoryData}
                    monthExpenses={monthExpenses}
                />
            </div>

            <div>
                <TransactionList transactions={monthExpenses} openDeleteModal={(id)=> console.log(id)}/>
            </div>

            {isNewTransactionModalOpen && <TransactionForm />}
            <DeleteTransaction />

            <SetPin />

            {(expensesError || categoriesError) && (
                <div className="error-message">
                    {expensesError || categoriesError}
                </div>
            )}
        </div>
    );
}