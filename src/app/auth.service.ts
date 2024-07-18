import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private baseUrl = '/assets/db.json'; // base URL for local data
   private baseUrl = "http://localhost:3000/dbs.json"
  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    // Corrected URL: no `db.json` in local operations
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    // Corrected URL: no `db.json` in local operations
    return this.http.post(`${this.baseUrl}`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
