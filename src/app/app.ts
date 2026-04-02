import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LoaderComponent } from './components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practical-platform');

  isLoading = true;

  // 🔥 This will be called when loader emits "ready"
  onLoaderReady() {
    this.isLoading = false;
  }
}
