import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, RouterLink],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token); // Store the token in local storage
          this.toastr.success('Login successful! Redirecting to words page.', 'Success'); // Show success message
          this.router.navigate(['/words']); // Navigate to the words page
        },
        (error: any) => {
          console.error('Login failed', error);
          this.toastr.error('Login failed. Please check your credentials.', 'Error'); // Show error message
        }
      );
    } else {
      this.toastr.warning('Please fill out all required fields.', 'Warning'); // Show warning if form is invalid
    }
  }
}
