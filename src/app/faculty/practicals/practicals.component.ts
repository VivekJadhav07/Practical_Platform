import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-practicals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './practicals.component.html',
  styleUrl: './practicals.component.scss'
})
export class PracticalsComponent {
  practicals = [
    { title: 'Binary Search', description: 'Implement efficient searching in a sorted array using divide and conquer.', type: 'Code', language: 'Python', testCases: 5, difficulty: 'Medium' },
    { title: 'Stack Using Arrays', description: 'Create a LIFO data structure with push, pop and peek operations.', type: 'Code', language: 'C', testCases: 3, difficulty: 'Easy' },
    { title: 'Normalization Theory', description: 'Theoretical practical on 1NF, 2NF and 3NF database design principles.', type: 'Theory', language: 'SQL/Text', testCases: 0, difficulty: 'Hard' },
    { title: 'Dijkstra Algorithm', description: 'Find the shortest path between nodes in a graph using greedy approach.', type: 'Code', language: 'Java', testCases: 4, difficulty: 'Hard' },
    { title: 'Merge Sort', description: 'Sort a list of elements by recursively dividing the problem into halves.', type: 'Code', language: 'C++', testCases: 6, difficulty: 'Medium' }
  ];
}