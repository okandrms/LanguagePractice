import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { WordComponent } from './word/word.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'words', component: WordComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'words', pathMatch: 'full' },
  { path: '**', redirectTo: 'words' }
];
