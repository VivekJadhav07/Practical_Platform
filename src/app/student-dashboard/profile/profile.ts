import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  // Variables to hold our data
  isLoading: boolean = true;
  userData: any = null;
  subjects: any[] = [];
  performance: any[] = [];

  constructor() {}

  // ngOnInit fires automatically as soon as the component loads
  ngOnInit(): void {
    this.fetchProfileData();
  }

  // Simulating an automatic database fetch (e.g., from Firebase/Firestore)
  fetchProfileData() {
    this.isLoading = true;

    // setTimeout simulates the network delay of an API call
    setTimeout(() => {
      this.userData = {
        name: 'Dnyaneshwar Nikam',
        initials: 'DN',
        role: 'student',
        branch: 'CS',
        batch: '2024-2027',
        rollNo: 'CS21045',
        email: 'dnyaneshwar@rcoem.edu',
        division: 'B',
        year: 'Third year',
        semester: 'Semester VI'
      };

      this.subjects = [
        { name: 'Data Structures', professor: 'Prof. Sharma', practicals: 8, avgScore: 8.5, icon: 'code', color: '#10b981' },
        { name: 'DBMS', professor: 'Prof. Iyer', practicals: 10, avgScore: 7.8, icon: 'database', color: '#6366f1' },
        { name: 'Computer Networks', professor: 'Prof. Deshpande', practicals: 6, avgScore: 9.0, icon: 'mail', color: '#f59e0b' }
      ];

      this.performance = [
        { label: 'Data Structures', score: 8.5, color: '#10b981' },
        { label: 'DBMS', score: 7.8, color: '#f59e0b' },
        { label: 'Computer Networks', score: 9.0, color: '#0ea5e9' }
      ];

      // Once data is loaded, remove the loading state to trigger the animation
      this.isLoading = false;
    }, 800); // 800ms delay to make it feel like a real app
  }

  onJoinClassroom() {
    // Logic for joining a new classroom
    console.log('Opening join classroom dialog...');
  }
}
