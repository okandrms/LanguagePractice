import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/login`, credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/register`, userData);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/logout`, {});
  }

  isLoggedIn(): boolean {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
