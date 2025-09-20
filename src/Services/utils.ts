import {Transaction} from '../types/types';

export const getMonthlySummary = (transactions: Transaction[]) => {
  let income = 0;
  let expense = 0;
  let byCategory: Record<string, number> = {};

  transactions.forEach(t => {
    if (t.type === 'income') income += t.amount;
    else expense += t.amount;

    byCategory[t.category] = (byCategory[t.category] || 0) + t.amount;
  });
  // compute total of all categories
  const total = Object.values(byCategory).reduce((sum, val) => sum + val, 0);

  let byCategoryPercent: Record<string, number> = {};
  Object.entries(byCategory).forEach(([cat, val]) => {
    const value = total === 0 ? 0 : Math.round((val / total) * 100);
    byCategoryPercent[cat] = value;
  });

  return {income, expense, byCategory, byCategoryPercent};
};

export const getDailyExpenseSeries = (transactions: Transaction[]) => {
  const daily: Record<string, number> = {};
  transactions.forEach(t => {
    if (t.type === 'expense') {
      const day = new Date(t.date).getDate();
      daily[day] = (daily[day] || 0) + t.amount;
    }
  });
  const sortedDays = Object.keys(daily).sort((a, b) => +a - +b);
  return sortedDays.map(d => ({
    day: +d,
    total: daily[d],
  }));
};

export const getMonthlyTransactions = (
  transactions: Transaction[],
  month: string,
): Transaction[] => {
  return transactions.filter(t => t.date.startsWith(month));
};
