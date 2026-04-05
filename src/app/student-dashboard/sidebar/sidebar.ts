import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';// Assuming you use Angular Router

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() userName: string = 'Dnyaneshwar Nikam';
  @Input() userInitials: string = 'DN';
  @Input() userDetails: string = 'CSE - Div C - 3rd yr';

  // Track active menu item (Default to Home)
  activeItem: string = 'Home';

  constructor(private router: Router) {}

  signOut() {
    // 1. Clear any authentication tokens or user data
  //  localStorage.removeItem('authToken');
   // localStorage.removeItem('userRole');
    // If you use sessionStorage, clear that too:
    // sessionStorage.clear();

    // Note: If you want to keep the theme preference, don't use localStorage.clear()
    // Otherwise, the user will lose their light/dark mode setting on logout!

    // 2. Redirect to the landing page (assuming your landing page route is '/')
    this.router.navigate(['/']);
  }

  setActive(item: string) {
    this.activeItem = item;
  }
}
