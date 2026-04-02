import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Assuming you use Angular Router

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

  setActive(item: string) {
    this.activeItem = item;
  }
}
