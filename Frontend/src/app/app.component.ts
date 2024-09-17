import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordFormComponent } from './wordform/wordform.component'; // Import your standalone WordFormComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordFormComponent], // Add WordFormComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LanguagePractice';
}
