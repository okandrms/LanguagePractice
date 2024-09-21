import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl = 'http://localhost:8000/api/words'; // Your API URL

  constructor(private http: HttpClient) {}

  // Create (POST)
  addWord(word: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, word);
  }

  // Read (GET)
  getWords(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Update (PUT)
  updateWord(id: number, word: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, word);
  }

  // Delete (DELETE)
  deleteWord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Export (GET with Blob)
  exportWords(): Observable<Blob> {
    return this.http.get<Blob>(`${this.apiUrl}/export`, { responseType: 'blob' as 'json' });
  }
}
