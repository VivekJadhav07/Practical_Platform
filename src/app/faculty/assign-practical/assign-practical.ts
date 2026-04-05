import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-practical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assign-practical.html',
  styleUrls: ['./assign-practical.scss']
})
export class AssignPractical {
  syllabus = [
    { id: 1, title: 'Binary Search Implementation', category: 'Searching', type: 'Code', language: 'Python', testCases: 5 },
    { id: 2, title: 'Stack Using Arrays', category: 'Linear DS', type: 'Code', language: 'C', testCases: 3 },
    { id: 3, title: 'Normalization Theory', category: 'Database Design', type: 'Theory', language: 'Text', testCases: 0 },
    { id: 4, title: 'Dijkstra Algorithm', category: 'Graphs', type: 'Code', language: 'Java', testCases: 4 },
    { id: 5, title: 'ER Diagram Construction', category: 'Schema', type: 'Theory', language: 'Drawing', testCases: 0 }
  ];

  selectedItem: any = null;

  selectItem(item: any) {
    this.selectedItem = item;
  }

  assignPractical() {
    alert(`Successfully assigned "${this.selectedItem.title}" to Data Structures - Div B!`);
    // Logic: Save to Supabase 'practicals' table with selected classroom ID
  }
}