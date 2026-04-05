import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html', // Yahan CLI wala name hi rehne do
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students = [
    { initials: 'RK', name: 'Rohit Kulkarni', roll: 'CS21045', avg: 8.5, done: 5, total: 8, color: '#E1F5EE' },
    { initials: 'AM', name: 'Amit Meshram', roll: 'CS21012', avg: 9.2, done: 7, total: 8, color: '#FAEEDA' },
    { initials: 'PP', name: 'Priya Pawar', roll: 'CS21067', avg: 6.0, done: 3, total: 8, color: '#FCEBEB' },
    { initials: 'VD', name: 'Vivek Deshpande', roll: 'CS21031', avg: 8.8, done: 6, total: 8, color: '#EEEDFE' },
    { initials: 'SK', name: 'Sneha Kulthe', roll: 'CS21055', avg: 9.5, done: 8, total: 8, color: '#E1F5EE' }
  ];
}