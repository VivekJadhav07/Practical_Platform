import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LandingComponent],
 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practical-platform');
}
