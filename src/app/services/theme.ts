import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal to hold the current theme state
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
    // Check local storage first, then fall back to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkMode(true);
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setDarkMode(true);
    }
  }

  toggleTheme() {
    this.setDarkMode(!this.isDarkMode());
  }

  private setDarkMode(isDark: boolean) {
    this.isDarkMode.set(isDark);
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
