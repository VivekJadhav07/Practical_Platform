import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent {
  selectedRole: 'student' | 'faculty' | null = null;

  constructor(private router: Router) {}

  selectRole(role: 'student' | 'faculty') {
    this.selectedRole = role;
  }

  continue() {
    if (!this.selectedRole) return;
    // Store role for the login page to read later
    localStorage.setItem('selectedRole', this.selectedRole);
    
    // In a real app, you'd navigate to /login
    // For now, we'll just alert to confirm it works
    alert(`Navigating to ${this.selectedRole} login...`);
    // this.router.navigate(['/login']); 
  }
}