import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WordService } from '../services/word.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-wordform',
  standalone: true,
  templateUrl: './wordform.component.html',
  styleUrls: ['./wordform.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, NavbarComponent]
})
export class WordFormComponent {
  wordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private wordService: WordService,
    private toastr: ToastrService // Inject ToastrService
  ) {
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
          this.toastr.success('Word added successfully!', 'Success'); // Show success message
          this.wordForm.reset(); // Clear form fields after submission
        },
        (error: any) => {
          console.error('Error adding word', error);
          this.toastr.error('Failed to add word. Please try again.', 'Error'); // Show error message
        }
      );
    } else {
      this.toastr.warning('Please fill out all required fields.', 'Warning'); // Show warning if form is invalid
    }
  }
}
