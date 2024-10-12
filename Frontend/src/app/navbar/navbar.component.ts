import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoginOrRegisterPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register'; // Adjust as necessary based on your routing configuration
  }

  logout() {
    const user = localStorage.getItem('token');

    if (user) {
      this.authService.logout().subscribe(
        () => {
          this.toastr.success('Logged out successfully', 'Logout Successful');
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Logout failed', error);
          this.toastr.error('Logout failed. Please try again.', 'Logout Error');
        }
      );
    } else {
      this.toastr.error('You are not logged in', 'Logout Error');
      this.router.navigate(['/login']);
    }
  }
}
