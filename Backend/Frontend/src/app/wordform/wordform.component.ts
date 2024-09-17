import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for forms

@Component({
  selector: 'app-wordform',
  standalone: true,  // Standalone component
  templateUrl: './wordform.component.html', // Link to your HTML template
  styleUrls: ['./wordform.component.scss'], // Link to your styles
  imports: [CommonModule, ReactiveFormsModule]  // Import ReactiveFormsModule and CommonModule
})
export class WordFormComponent {
  wordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.wordForm = this.fb.group({
      nederlands: ['', Validators.required], // Dutch word
      turkish: ['', Validators.required],    // Turkish meaning
      english: ['', Validators.required],    // English meaning
      sentence: ['', Validators.required]    // Example sentence
    });
  }

  // Function to handle form submission
  submitForm() {
    if (this.wordForm.valid) {
      console.log('Form Data:', this.wordForm.value);
    }
  }
}
