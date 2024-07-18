import { Component } from '@angular/core';
import { Expense } from '../expense-model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

  expense:Expense = {description:'',amount:0,date:''}

  constructor(private service:ExpenseService){}

  onSubmit(){
    this.service.addExpense(this.expense).subscribe(response =>{
      console.log('Expense added successfully',response);
    })
  }
}
