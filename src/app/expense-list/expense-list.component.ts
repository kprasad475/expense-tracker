import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense-model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit{

expenses:Expense[]=[]
selectedExpense:Expense | null = null

  constructor(private service:ExpenseService){}

  ngOnInit(){
      this.service.getExpenses().subscribe(data =>{
        this.expenses=data;
        console.log(this.expenses)
      })
  }

  editExpense(expense:Expense){
this.selectedExpense = {...expense};
  }

  updateExpense() {
    if (this.selectedExpense && this.selectedExpense.id) {
      console.log(`Updating expense with ID: ${this.selectedExpense.id}`);
      this.service.updateExpense(this.selectedExpense.id, this.selectedExpense).subscribe(response => {
        const index = this.expenses.findIndex(exp => exp.id === this.selectedExpense?.id);
        if (index !== -1 && this.selectedExpense) {
          this.expenses[index] = this.selectedExpense!;
        }
        this.selectedExpense = null; // Close the modal
      });
    }
  }
  

  cancelEdit(){
    this.selectedExpense = null;
  }

  

  deleteExpense(id: string | undefined) {
    if (id) {  // Type guard to ensure id is not undefined
      this.service.deleteExpense(id).subscribe(response => {
        this.expenses = this.expenses.filter(exp => exp.id !== id);
      });
    } else {
      // Handle the case where id is undefined, e.g., show an error message
      console.error('Expense ID is undefined');
    }
  }
  

}
