'use client';

import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { getCategories as fetchCategoriesApi } from '@/lib/api';
import { Category } from '@/types';

export function useCategories() {
  const { setCategories: setContextCategories, setIsLoading } = useAppContext();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCategories = async (): Promise<void> => {
    setLoading(true);
    setIsLoading(true);
    setError(null);
    
    try {
      const categories: Category[] = await fetchCategoriesApi();
      setContextCategories(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories. Please try again.');
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return {
    fetchCategories,
    loading,
    error
  };
}