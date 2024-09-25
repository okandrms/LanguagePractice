import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WordService } from '../services/word.service';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-word',
  standalone: true,
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LoginComponent]
})
export class WordComponent {
  wordForm: FormGroup;

  constructor(private fb: FormBuilder, private wordService: WordService) {
    this.wordForm = this.fb.group({
      nederlands: ['', Validators.required],
      turkish: ['', Validators.required],
      english: ['', Validators.required],
      sentence: ['', Validators.required],
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
