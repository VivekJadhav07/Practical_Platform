import { Component, Input, inject } from '@angular/core'; // 1. Added inject
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme'; // 2. Ensure this path is correct

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  // 3. Inject the service as 'public' so the HTML template can see it
  public themeService = inject(ThemeService);

  @Input() userName: string = 'Dnyaneshwar Nikam';
  @Input() userInitials: string = 'DN';
  @Input() userDetails: string = 'Student | CSE - Div C - 3rd yr';
  @Input() userLocation: string = 'Nagpur';
  @Input() notificationCount: number = 4;

  // 4. Update the local toggle function to use the global service
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
