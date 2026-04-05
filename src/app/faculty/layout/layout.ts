import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class LayoutComponent implements OnInit {
  isDarkMode: boolean = false;

  // State for the mobile "More" menu slide-up sheet
  isMobileMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // 1. Check if theme was saved before
    const savedTheme = localStorage.getItem('theme');

    // Default to light if nothing is saved, otherwise use saved preference
    if (savedTheme === 'dark') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.isDarkMode = theme === 'dark';

    // 2. Safe way to add/remove class from body
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }

    // 3. Save preference
    localStorage.setItem('theme', theme);
  }

  // 4. Toggle the mobile navigation menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
