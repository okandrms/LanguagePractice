import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for forms
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-wordform',
  standalone: true,  // Standalone component
  templateUrl: './wordform.component.html', // Link to your HTML template
  styleUrls: ['./wordform.component.scss'], // Link to your styles
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]  // Import HttpClientModule here
})
export class WordFormComponent {
  wordForm: FormGroup;

  constructor(private fb: FormBuilder, private wordService: WordService) {
    this.wordForm = this.fb.group({
      nederlands: ['', Validators.required],
      turkish: ['', Validators.required],
      english: ['', Validators.required],
      sentence: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.wordForm.valid) {
      this.wordService.addWord(this.wordForm.value).subscribe(
        (response: any) => {
          console.log('Word added successfully', response);
        },
        (error: any) => {
          console.error('Error adding word', error);
        }
      );
    }
  }
}
