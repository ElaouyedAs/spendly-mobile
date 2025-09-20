export interface Transaction {
  id: string;
  date: string; // format ISO
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface DashboardState {
  transactions: Transaction[];
  month: string; // ex: "2025-09"
}
