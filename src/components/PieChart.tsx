'use client';

import { useEffect, useRef } from 'react';
import { useAppContext } from '@/context/AppContext';
import { formatCurrency } from '@/lib/utils';
import { CategoryData } from '@/types';
import Chart from 'chart.js/auto';

interface PieChartProps {
  categoryData: CategoryData[];
}

export default function PieChart({ categoryData }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'doughnut'> | null>(null);
  const { categoryColors, currencySymbol } = useAppContext();

  useEffect(() => {
    // Clear any existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!categoryData || categoryData.length === 0 || !chartRef.current) {
      // No data to display
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    
    // Configure chart defaults
    Chart.defaults.color = '#b3b3b3';
    Chart.defaults.borderColor = '#606060';
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    
    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categoryData.map(c => c.category),
        datasets: [{
          data: categoryData.map(c => c.total),
          backgroundColor: categoryData.map(c => categoryColors[c.category]),
          borderColor: '#1a1a1a',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw as number;
                const total = (context.dataset.data as number[]).reduce((sum, val) => sum + val, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${formatCurrency(value, currencySymbol)} (${percentage}%)`;
              }
            }
          }
        }
      }
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [categoryData, categoryColors, currencySymbol]);

  if (!categoryData || categoryData.length === 0) {
    return (
      <div className="chart-box no-data">
        <p>No expenses recorded for this month</p>
      </div>
    );
  }

  return (
    <div className="chart-box">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}