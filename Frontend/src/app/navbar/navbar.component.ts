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
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUserName(): string {
    return this.authService.getUserName(); // Kullanıcı adını al
  }

  isLoginOrRegisterPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register';
  }

  logout() {
    if (this.isLoggedIn()) {
      this.authService.logout().subscribe(
        () => {
          this.toastr.success('Logged out successfully', 'Logout Successful');
          localStorage.removeItem('token');
          localStorage.removeItem('user'); // Kullanıcı bilgilerini de sil
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
