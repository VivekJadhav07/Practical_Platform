import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import the standalone components we created earlier
import { SidebarComponent } from './sidebar/sidebar';
import { NavbarComponent } from '../components/navbar/navbar'; // Adjust path if your navbar is elsewhere

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  // Add them to the imports array
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.scss']
})
export class StudentDashboardComponent {
  // You can pass dynamic user data down to the navbar and sidebar from here
  // after fetching it from your authentication/login service!
}
