import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Practical {
  id: string;
  num: string;
  title: string;
  language: string;
  points: string;
  status: string;
  statusClass: string;
  iconClass: string;
  iconSvg: SafeHtml;
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
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './praticals.html',
  styleUrls: ['./praticals.scss']
})
export class PracticalsComponent implements OnInit {

  filters: string[] = ['All', 'Pending', 'Submitted', 'Graded'];
  activeFilter: string = 'All';
  subjectGroups: SubjectGroup[] = [];

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadPracticalsData();
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  // Navigate to solve page with the specific problem ID (fixed with /student prefix)
  goToSolve(problemId: string): void {
    this.router.navigate(['/student/solve', problemId]);
  }

  get filteredSubjectGroups() {
    return this.subjectGroups.map(group => {
      const filteredPracticals = group.practicals.filter(prac => {
        if (this.activeFilter === 'All') return true;
        if (this.activeFilter === 'Pending') return prac.status.toLowerCase() === 'pending';
        if (this.activeFilter === 'Submitted') return prac.status.toLowerCase() === 'submitted';
        if (this.activeFilter === 'Graded') return prac.status.includes('/') || prac.status.toLowerCase() === 'graded';
        return true;
      });

      return {
        ...group,
        filteredPracticals,
        filteredPracticalsCount: filteredPracticals.length
      };
    }).filter(group => group.filteredPracticals.length > 0);
  }

  loadPracticalsData(): void {
    const defaultSvg = this.sanitizer.bypassSecurityTrustHtml('<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>');

    this.subjectGroups = [
      {
        id: 'sub-1',
        title: 'Data Structures',
        dotClass: 'dot-green',
        totalPracticals: 5,
        averageScore: '8.8/10',
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
            iconSvg: defaultSvg
          },
          {
            id: 'prac-2',
            num: '02',
            title: 'Stack using arrays',
            language: 'C',
            points: '10 pts',
            status: '9/10',
            statusClass: 'badge-green',
            iconClass: 'badge-green-icon',
            iconSvg: defaultSvg
          },
          {
            id: 'prac-3',
            num: '03',
            title: 'Linked list — insertion & deletion',
            language: 'C++',
            points: '10 pts',
            status: '8/10',
            statusClass: 'badge-green',
            iconClass: 'badge-green-icon',
            iconSvg: defaultSvg
          },
          {
            id: 'prac-4',
            num: '04',
            title: 'Bubble sort',
            language: 'Java',
            points: '10 pts',
            status: '10/10',
            statusClass: 'badge-green',
            iconClass: 'badge-green-icon',
            iconSvg: defaultSvg
          },
          {
            id: 'prac-5',
            num: '05',
            title: 'Binary Search Tree (BST) - Insertion',
            language: 'Python',
            points: '15 pts',
            status: 'Pending',
            statusClass: 'badge-orange',
            iconClass: 'badge-orange-icon',
            iconSvg: defaultSvg
          }
        ]
      }
    ];
  }
}
