import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';  // Adjust the import path
import { ToastrService } from 'ngx-toastr';  // Import Toastr service
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,  // Initialize Toastr service
    private router: Router           // Initialize Router for navigation
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          this.toastr.success('Registration successful! Please log in.', 'Success'); // Show success message
          this.router.navigate(['/login']); // Redirect to login page
        },
        error => {
          console.error('Registration error', error);
          this.toastr.error('Registration failed. Please check your information.', 'Error'); // Show error message
        }
      );
    } else {
      this.toastr.warning('Please fill out all required fields.', 'Warning'); // Show warning if form is invalid
      console.error('Form is invalid');
    }
  }
}
