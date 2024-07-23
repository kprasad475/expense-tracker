import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense-model';
import { ExpenseService } from '../expense.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit{

expenses:Expense[]=[]
selectedExpense:Expense | null = null

  constructor(private service:ExpenseService,private dialog:MatDialog){}

  ngOnInit(){
      this.service.getExpenses().subscribe(data =>{
        this.expenses=data;
        console.log(this.expenses)
      })
  }

  openEditDialog(expense: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: { expense }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the expense in the list with the result
        const index = this.expenses.findIndex(e => e.id === result.id);
        if (index !== -1) {
          this.expenses[index] = result;
        }
      }
    });
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
