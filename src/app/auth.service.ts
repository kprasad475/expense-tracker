import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://your-api-url.com/expenses';

  constructor(private http:HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user:{name:string,email:string,password:string}):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  logout():void{
    localStorage.removeItem('token')
  }
}
