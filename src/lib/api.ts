import { Transaction, Category, ApiResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '' //"https://script.google.com/macros/s/<ID>/exec";


// Fetch categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_URL}?action=getCategories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data: ApiResponse<Category[]> = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// Fetch transactions for a specific date range
export async function getTransactions(
  apiKey: string, 
  dateFrom: string, 
  dateTo: string, 
  type: 'expense' | 'income' = 'expense'
): Promise<Transaction[]> {
  try {
    const request = {
      action: "readTransactions",
      apiKey,
      filters: {
        type,
        dateFrom,
        dateTo
      }
    };

    const response = await fetch(API_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) throw new Error('Failed to fetch transactions');
    const data: ApiResponse<Transaction[]> = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}

// Create a new transaction
export async function createTransaction(
  apiKey: string, 
  transactionData: {
    type: 'expense' | 'income';
    amount: number;
    category: string;
    date: string;
    description: string;
  }
): Promise<ApiResponse<any>> {
  try {
    const request = {
      action: "createTransaction",
      apiKey,
      data: {
        type: transactionData.type,
        amount: parseFloat(transactionData.amount.toString()),
        category: transactionData.category,
        date: transactionData.date,
        description: transactionData.description
      }
    };

    const response = await fetch(API_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error: ApiResponse<any> = await response.json();
      throw new Error(error.error || 'Failed to add transaction');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}


// Create a new transaction
export async function deleteTransaction(
  id: string, 
  apiKey:string
  
): Promise<ApiResponse<any>> {
  try {
    const request = {
      action: "deleteTransaction",
      apiKey,
      id
    };

    const response = await fetch(API_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error: ApiResponse<any> = await response.json();
      throw new Error(error.error || 'Failed to add transaction');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}