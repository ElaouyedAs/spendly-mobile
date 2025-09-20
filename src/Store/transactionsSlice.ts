import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface TransactionsState {
  list: Transaction[];
}

const initialState: TransactionsState = {
  list: [],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.list.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
  },
});

export const {addTransaction, removeTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;
