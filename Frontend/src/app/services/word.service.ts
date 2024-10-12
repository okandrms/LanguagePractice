import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl = 'http://localhost:8000/api'; // Your API URL

  constructor(private http: HttpClient) {}

  // Create (POST)
  addWord(wordData: any): Observable<any> {
    const token = localStorage.getItem('token'); // Adjust according to your storage method
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Set the authorization header
      'Content-Type': 'application/json' // Ensure the correct content type
    });

    return this.http.post(`${this.apiUrl}/words`, wordData, { headers }); // Send request with headers
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
  exportWords() {
    return this.http.get(`${this.apiUrl}/export/words`, { responseType: 'blob' });
  }
}
