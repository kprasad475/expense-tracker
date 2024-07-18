import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {email:'',password:''}

  constructor (private service:AuthService,private router:Router){}

  onSubmit(){
    this.service.login(this.credentials).subscribe(response =>{
      localStorage.setItem('token',response.token);
      this.router.navigate(['/dashboard'])
    })
  }

}
