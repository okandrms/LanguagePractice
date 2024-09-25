import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { WordFormComponent } from './wordform/wordform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule here
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    WordFormComponent
  ],
  template: `
    <ng-template *ngIf="isLoggedIn">
      <app-navbar></app-navbar>
    </ng-template>

    <ng-template *ngIf="!isLoggedIn">
      <app-login></app-login>
    </ng-template>

    <router-outlet></router-outlet>

    <h1>{{ title }}</h1>

    <app-wordform></app-wordform>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LanguagePractice';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false;
    });
  }
}
