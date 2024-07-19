import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {name: '',email :'',password:''}

  constructor (private service:AuthService,private router:Router){}

  onSubmit(){
    this.service.register(this.user).subscribe(response =>{
     this.router.navigate(['/login']);
    })
  }

 
}
