// Transaction data types
export interface Transaction {
    id?: string;
    type: 'expense' | 'income';
    amount: number;
    category: string;
    date: string;
    description: string;
  }
  
  // Category types
  export interface Category {
    id?: string;
    name: string;
    color?: string;
  }
  
  // Category data with calculated metrics
  export interface CategoryData {
    category: string;
    total: number;
    percentage: number;
  }
  
  // Form data for expense submission
  export interface ExpenseFormData {
    name: string;
    category: string;
    transaction_type: 'expense' | 'income';
    amount: string;
    date: string;
  }
  
  // API responses
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  // App context state
  export interface AppContextState {
    apiKey: string | null;
    setApiKey: (key: string | null) => void;
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    expenses: Transaction[];
    setExpenses: (expenses: Transaction[]) => void;
    categories: Category[];
    setCategories: (categories: Category[]) => void;
    isLoading: boolean;
    isNewTransactionModalOpen:boolean;
    toggleNewTransaction: (loading: boolean) => void;
    setIsLoading: (loading: boolean) => void;
    disabledCategories: Set<string>;
    toggleCategory: (category: string) => void;
    categoryColors: Record<string, string>;
    assignCategoryColors: (categories: string[]) => void;
    currencySymbol: string;
    setCurrencySymbol: (symbol: string) => void;
    savePin: (pin: string) => void;
  }
  
  // Notification message
  export interface NotificationMessage {
    text: string;
    type: 'success' | 'error' | '';
  }