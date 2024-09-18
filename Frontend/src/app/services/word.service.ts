import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl = 'http://localhost:8000/api/words';

  constructor(private http: HttpClient) {}

  getWords(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addWord(word: any): Observable<any> {
    return this.http.post(this.apiUrl, word);
  }

  exportWords(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export`, { responseType: 'blob' });
  }
}
