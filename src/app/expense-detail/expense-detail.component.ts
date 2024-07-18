import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Expense } from '../expense-model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.css'
})
export class ExpenseDetailComponent implements OnInit {

  expense?: Expense;

  constructor(private router:Router,private route:ActivatedRoute,
    private service:ExpenseService
  ){}
ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.getExpense(id).subscribe(data =>{
        this.expense = data
      })
    }
}

goBack(){
  this.router.navigate(['/dashboard']);
}

}
