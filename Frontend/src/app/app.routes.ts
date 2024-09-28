import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WordFormComponent } from './wordform/wordform.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'words',
    component: WordFormComponent,
    canActivate: [AuthGuard] // Giriş yapılmışsa bu sayfayı görüntüle
  },
  { path: '**', redirectTo: 'login' } // Tanımlanmamış yol için login sayfasına yönlendir
];

