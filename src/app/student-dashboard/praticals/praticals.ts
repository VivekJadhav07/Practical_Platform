import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- INTERFACES ---
export interface Practical {
  id: string;
  num: string;
  title: string;
  language: string;
  points: string;
  status: string;
  statusClass: string;
  iconClass: string;
  iconSvg: string;
}

export interface SubjectGroup {
  id: string;
  title: string;
  dotClass: string;
  totalPracticals: number;
  averageScore: string;
  practicals: Practical[];
}

@Component({
  selector: 'app-practicals',
  standalone: true,            // <-- REQUIRED FOR MODERN ANGULAR
  imports: [CommonModule,RouterModule],     // <-- TELLS ANGULAR WHAT *ngFor and [ngClass] ARE
  templateUrl: './praticals.html', // (Make sure this matches your exact HTML file name)
  styleUrls: ['./praticals.scss'] // (Make sure this matches your exact SCSS file name)
})
export class PracticalsComponent implements OnInit {

  // Filter State
  filters: string[] = ['All', 'Pending', 'Submitted', 'Graded'];
  activeFilter: string = 'All';

  // Component Data
  subjectGroups: SubjectGroup[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadPracticalsData();
  }

  // Filter click handler
  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
    // You can add logic here to actually filter the 'subjectGroups' array based on the status
  }

  // Load dummy data (matching your UI)
  loadPracticalsData(): void {
    this.subjectGroups = [
      {
        id: 'sub-1',
        title: 'Data Structures',
        dotClass: 'dot-green',
        totalPracticals: 6,
        averageScore: '8.5/10',
        practicals: [
          {
            id: 'prac-1',
            num: '01',
            title: 'Binary search implementation',
            language: 'Python',
            points: '10 pts',
            status: 'Pending',
            statusClass: 'badge-orange',
            iconClass: 'badge-orange-icon',
            // Simple generic code/bracket icon
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
          },
          {
            id: 'prac-2',
            num: '02',
            title: 'Stack using arrays',
            language: 'C',
            points: '10 pts',
            status: '9/10',
            statusClass: 'badge-green',
            iconClass: 'badge-orange-icon',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
          },
          {
            id: 'prac-3',
            num: '03',
            title: 'Linked list — insertion & deletion',
            language: 'C',
            points: '10 pts',
            status: '8/10',
            statusClass: 'badge-green',
            iconClass: 'badge-orange-icon',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
          },
          {
            id: 'prac-4',
            num: '04',
            title: 'Bubble sort',
            language: 'C',
            points: '10 pts',
            status: '10/10',
            statusClass: 'badge-green',
            iconClass: 'badge-orange-icon',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
          }
        ]
      },
      {
        id: 'sub-2',
        title: 'DBMS',
        dotClass: 'dot-purple',
        totalPracticals: 5,
        averageScore: '7.8/10',
        practicals: [
          {
            id: 'prac-5',
            num: '01',
            title: 'SELECT with JOIN queries',
            language: 'SQL',
            points: '10 pts',
            status: 'Pending',
            statusClass: 'badge-orange',
            iconClass: 'badge-purple-icon',
            // Simple generic database cylinder icon
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>'
          },
          {
            id: 'prac-6',
            num: '02',
            title: 'Normalization — 3NF',
            language: 'SQL',
            points: '10 pts',
            status: '7/10',
            statusClass: 'badge-orange', // or badge-yellow depending on your theme setup
            iconClass: 'badge-purple-icon',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>'
          },
          {
            id: 'prac-7',
            num: '03',
            title: 'ER Diagram — Hospital DB',
            language: 'Theory',
            points: '10 pts',
            status: '8/10',
            statusClass: 'badge-green',
            iconClass: 'badge-purple-icon',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>'
          }
        ]
      }
    ];
  }
}
