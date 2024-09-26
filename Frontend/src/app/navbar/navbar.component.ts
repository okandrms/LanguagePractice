import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        localStorage.removeItem('token'); // Token'ı temizle
        this.router.navigate(['/login']); // Logout sonrası login sayfasına yönlendir
      },
      (error: any) => {
        console.error('Logout failed', error);
      }
    );
  }
}
