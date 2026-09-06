import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './solve.html',
  styleUrls: ['./solve.scss']
})
export class SolveComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  problem: ProblemDetails = {
    id: 'p-101',
    title: 'Binary search implementation',
    language: 'Python',
    marks: 10,
    dueDate: 'Due today',
    description:
      'Implement the <strong>binary search algorithm</strong> on a sorted integer array. The function should return the <em>index</em> of the target element if found, or <code>-1</code> if not present.',
    constraints:
      'Assume the input array is always sorted in ascending order. Aim for O(log n) time complexity.',
    tags: ['Data Structures', 'Searching', 'O(log n)']
  };

  availableLanguages = [
    'Python',
    'C',
    'C++',
    'Java',
    'JavaScript'
  ];

  selectedLanguage = 'Python';

  codeContent = `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1

    while lo <= hi:
        mid = (lo + hi) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1

    return -1

print(binary_search([1, 3, 5, 7, 9], 5))`;

  inputContent = '';

  outputContent = '';

  isRunning = false;

  statusMessage = '';

  ngOnInit(): void {}

  changeLanguage(): void {

    switch (this.selectedLanguage) {

      case 'C':
        this.codeContent = `#include <stdio.h>

int main() {

    // Write your code here

    return 0;
}`;

        break;

      case 'C++':
        this.codeContent = `#include <iostream>
using namespace std;

int main() {

    // Write your code here

    return 0;
}`;

        break;

      case 'Java':
        this.codeContent = `import java.util.*;

public class Main {

    public static void main(String[] args) {

        // Write your code here

    }
}`;

        break;

      case 'Python':
        this.codeContent = `# Write your code here

`;

        break;

      case 'JavaScript':
        this.codeContent = `// Write your code here

`;

        break;
    }

    this.outputContent = '';
    this.statusMessage = '';
  }

  runCode(): void {

    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.outputContent = '';
    this.statusMessage = 'Running...';

    const languageIds: { [key: string]: number } = {
      'C': 50,
      'C++': 54,
      'Java': 62,
      'JavaScript': 63,
      'Python': 71
    };

    const request = {
      code: this.codeContent,
      language_id: languageIds[this.selectedLanguage],
      stdin: this.inputContent
    };

    this.http.post<any>(
      'https://practical-platform.onrender.com/run',
      request
    ).subscribe({

      next: (response) => {

        this.isRunning = false;

        if (response.compile_output) {
          this.outputContent = response.compile_output;
          this.statusMessage = 'Compilation Error';
          return;
        }

        if (response.stderr) {
          this.outputContent = response.stderr;
          this.statusMessage = 'Runtime Error';
          return;
        }

        this.outputContent =
          response.stdout || 'Program executed successfully with no output.';

        this.statusMessage = 'Execution completed';

      },

      error: (error) => {

        console.error(error);

        this.isRunning = false;
        this.statusMessage = 'Execution Failed';

        this.outputContent =
          'Unable to execute code. Please try again.';
      }

    });
  }

  submitSolution(): void {

    console.log('Submitting solution:', {
      problemId: this.problem.id,
      language: this.selectedLanguage,
      code: this.codeContent
    });

    alert('Solution submitted successfully!');

    this.router.navigate(['/student/results']);
  }
}