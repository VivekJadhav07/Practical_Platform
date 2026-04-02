import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// --- INTERFACES ---
export interface TestCase {
  id: number;
  input: string;
  expectedOutput: string;
  status: 'idle' | 'running' | 'passed' | 'failed';
}

export interface ProblemDetails {
  id: string;
  title: string;
  language: string;
  marks: number;
  dueDate: string;
  description: string;
  constraints: string;
  tags: string[];
}

@Component({
  selector: 'app-solve',
  standalone: true,
  imports: [CommonModule, FormsModule], // FormsModule is required for [(ngModel)]
  templateUrl: './solve.html',
  styleUrls: ['./solve.scss']
})
export class SolveComponent implements OnInit {

  constructor(private router: Router) {}

  // --- PROBLEM DATA ---
  // In the future, fetch this from a service: this.problemService.getProblem(id)
  problem: ProblemDetails = {
    id: 'p-101',
    title: 'Binary search implementation',
    language: 'Python',
    marks: 10,
    dueDate: 'Due today',
    description: 'Implement the <strong>binary search algorithm</strong> on a sorted integer array. The function should return the <em>index</em> of the target element if found, or <code>-1</code> if not present.',
    constraints: 'Assume the input array is always sorted in ascending order. Aim for O(log n) time complexity.',
    tags: ['Data Structures', 'Searching', 'O(log n)']
  };

  testCases: TestCase[] = [
    { id: 1, input: '[1, 3, 5, 7, 9], 5', expectedOutput: '2', status: 'idle' },
    { id: 2, input: '[2, 4, 6, 8], 3', expectedOutput: '-1', status: 'idle' },
    { id: 3, input: '[1], 1', expectedOutput: '0', status: 'idle' }
  ];

  // --- EDITOR STATE ---
  availableLanguages = ['Python', 'C', 'Java'];
  selectedLanguage = 'Python';

  // Default boilerplate code.
  // FUTURE: Update this dynamically when 'selectedLanguage' changes.
  codeContent: string = `def binary_search(arr, target): # Write your solution here
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`;



  ngOnInit(): void {
    // Initialization logic (e.g., getting problem ID from route params)
  }

  // --- ACTIONS ---

  /**
   * Future Real-time Integration:
   * 1. Send 'this.codeContent' and 'this.selectedLanguage' to your backend via HTTP/WebSocket.
   * 2. Backend compiles/runs the code against the hidden and public test cases.
   * 3. Return results and update 'this.testCases[x].status' to show pass/fail UI.
   */
  runTests(): void {
    console.log(`Running ${this.selectedLanguage} code...`);

    // Simulating a network delay and test execution
    this.testCases.forEach(tc => tc.status = 'running');

    setTimeout(() => {
      this.testCases.forEach(tc => tc.status = 'passed'); // Mocking all passed
      console.log('Tests completed.');
    }, 1500);
  }

  submitSolution(): void {
    console.log('Submitting final solution to database...', this.codeContent);
    alert('Solution submitted successfully!');
    this.router.navigate(['/student/results']);
    // Navigate back to practicals list or show a success modal
  }
}
