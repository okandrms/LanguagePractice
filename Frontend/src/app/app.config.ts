import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),  // Provide HttpClient with Fetch support
    provideRouter(routes),           // Provide routing
    provideClientHydration(),        // For SSR hydration
    provideZoneChangeDetection(),
    provideToastr({positionClass: 'toast-bottom-right'}),  // Enable zone change detection
    provideAnimations(),
    { provide: AuthService, useClass: AuthService }  // Provide the AuthService
  ]
};
