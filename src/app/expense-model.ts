export interface Expense {
    id?: string; // Optional id for when you are fetching expenses from a backend
    title: string;
    amount: number;
    date: string; // Consider using a Date object if you prefer
    category: string;
  }