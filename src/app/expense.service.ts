import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from './expense-model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = '/assets/db.json';
  constructor(private http:HttpClient) { }

  addExpense(expense: Expense): Observable<any> {
    return this.http.post(this.baseUrl, expense);
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.baseUrl);
  }

  getExpense(id: string): Observable<Expense> {
    return this.http.get<Expense>(`${this.baseUrl}/${id}`);
  }

  updateExpense(id: string, expense: Expense): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, expense);
  }

  deleteExpense(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
