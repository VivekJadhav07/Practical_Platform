import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  studentName = 'Dnyaneshwar';
  currentDate = 'Wednesday, 01 April 2026'; // You can make this dynamic using Date()

  stats = [
    { title: 'SUBJECTS', value: '6', description: 'enrolled this semester', valueColor: 'var(--text-heading)' },
    { title: 'COMPLETED', value: '14', description: 'practicals done', valueColor: 'var(--color-primary)' },
    { title: 'AVG SCORE', value: '82%', description: 'across all subjects', valueColor: '#d97706' } // Orange
  ];

  duePracticals = [
    {
      title: 'Binary search implementation',
      subject: 'Data Structures',
      topic: 'Python',
      dueText: 'Due today',
      dueClass: 'badge-orange',
      marks: 10,
      icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>'
    },
    {
      title: 'SELECT with JOIN queries',
      subject: 'DBMS',
      topic: 'SQL',
      dueText: '2 days left',
      dueClass: 'badge-purple',
      marks: 10,
      icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>'
    },
    {
      title: 'Theory — OSI Model layers',
      subject: 'Computer Networks',
      topic: 'Theory',
      dueText: '5 days left',
      dueClass: 'badge-green',
      marks: 10,
      icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
    }
  ];

  recentScores = [
    { title: 'Stack using arrays', subject: 'Data Structures', time: '2 days ago', score: 9, max: 10, color: 'var(--color-primary)' },
    { title: 'Normalization — 3NF', subject: 'DBMS', time: '4 days ago', score: 7, max: 10, color: '#d97706' },
    { title: 'Bubble sort', subject: 'Data Structures', time: '6 days ago', score: 10, max: 10, color: 'var(--color-primary)' },
    { title: 'ER Diagram — Hospital', subject: 'DBMS', time: '1 week ago', score: 8, max: 10, color: '#d97706' }
  ];
}
