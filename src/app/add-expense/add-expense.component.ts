import { Component } from '@angular/core';
import { Expense } from '../expense-model';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

  expense:Expense = {description:'',amount:0,date:''}

  constructor(private service:ExpenseService,private router:Router){}

  onSubmit() {
    this.service.addExpense(this.expense).subscribe(
      response => {
        console.log('Expense added successfully', response);
        this.router.navigate(['/expense-list']);
      },
      error => {
        console.error('Error adding expense', error);
      }
    );
  }
}
