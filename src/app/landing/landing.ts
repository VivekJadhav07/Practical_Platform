import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { AuthComponent } from '../components/auth/auth'; // Ensure path is correct

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule, AuthComponent],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent {
  selectedRole: 'student' | 'faculty' | null = null;
  showAuthModal = false; // Fixed typo

  constructor(private router: Router) {}

  selectRole(role: 'student' | 'faculty') {
    this.selectedRole = role;
  }

  continue() {
    if (!this.selectedRole) return;

    // Save state and trigger the modal popup
    localStorage.setItem('selectedRole', this.selectedRole);
    this.showAuthModal = true;

    // Note: We don't navigate to /auth because we want the modal to overlay the landing page.
  }
}
