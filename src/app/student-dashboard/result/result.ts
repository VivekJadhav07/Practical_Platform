import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- INTERFACES ---
export interface TestCaseResult {
  id: number;
  name: string;
  details: string;
  status: 'Pass' | 'Fail';
}

export interface PracticalResult {
  score: number;
  maxScore: number;
  title: string;
  category: string;
  language: string;
  submittedAt: string;
  testsPassed: number;
  totalTests: number;
  edgeCasesMissed: number;
  feedback: string;
}

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrls: ['./result.scss']
})
export class ResultComponent implements OnInit {

  // Mock data based on your UI design
  resultData: PracticalResult = {
    score: 9,
    maxScore: 10,
    title: 'Binary search implementation',
    category: 'Data Structures',
    language: 'Python',
    submittedAt: 'Submitted just now',
    testsPassed: 2,
    totalTests: 3,
    edgeCasesMissed: 1,
    feedback: `Good implementation overall — your binary search logic is correct for the general case. <strong>The edge case you missed is when the array has only one element:</strong> your loop condition <code>lo <= hi</code> handles this, but check that <code>arr[mid] == target</code> is being evaluated before updating pointers. Review the base condition when <code>lo == hi == 0</code>.`
  };

  testCases: TestCaseResult[] = [
    { id: 1, name: 'Test 1 — Element found in middle', details: '[1,3,5,7,9], target=5 → got 2', status: 'Pass' },
    { id: 2, name: 'Test 2 — Element not present', details: '[2,4,6,8], target=3 → got -1', status: 'Pass' },
    { id: 3, name: 'Test 3 — Single element array', details: '[1], target=1 → expected 0, got -1', status: 'Fail' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Future: Fetch result data based on ID from route parameters
  }
}
