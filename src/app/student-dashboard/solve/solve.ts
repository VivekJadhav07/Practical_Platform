import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ProblemDetails {
  id: string;
  title: string;
  language: string;
  marks: number;
  dueDate: string;
  description: string;
  constraints: string;
  tags: string[];
  defaultCode: string;
}

@Component({
  selector: 'app-solve',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './solve.html',
  styleUrls: ['./solve.scss']
})
export class SolveComponent implements OnInit {

  // ==========================================
  // 1. Component State Properties
  // ==========================================
  problem: ProblemDetails | null = null;
  availableLanguages = ['Python', 'C', 'C++', 'Java', 'JavaScript'];
  selectedLanguage = 'Python';
  codeContent = '';
  inputContent = '';
  outputContent = '';
  isRunning = false;
  isSubmitting = false;
  statusMessage = '';



  // 🔴 PASTE YOUR GEMINI API KEY HERE
  GEMINI_API_KEY = 'AIzaSyA8tctKT-qSXfrovYr_DYKJ-4nN7nBuXm0';

  problemsDb: { [key: string]: ProblemDetails } = {
    'prac-1': {
      id: 'prac-1',
      title: 'Binary Search',
      language: 'Python',
      marks: 10,
      dueDate: 'Due today',
      description: `
        <h3>Problem Description</h3>
        <p>
          Given a sorted array of integers and a target value, implement the
          <strong>Binary Search</strong> algorithm to find the position of the target.
        </p>
        <p>
          Binary Search works by repeatedly dividing the search range into two halves.
          Instead of checking every element one by one, compare the target with the
          middle element of the current range.
        </p>
        <p>
          If the middle element is equal to the target, return its index.
          If the target is smaller, continue searching in the left half.
          If the target is greater, continue searching in the right half.
        </p>
        <p>
          If the target does not exist in the array, return <strong>-1</strong>.
        </p>
        <h3>Example 1</h3>
        <pre>
Input: arr = [1, 3, 5, 7, 9], target = 5
Output: 2
        </pre>
        <p>The value 5 is present at index 2.</p>
        <h3>Example 2</h3>
        <pre>
Input: arr = [1, 3, 5, 7, 9], target = 6
Output: -1
        </pre>
        <p>The value 6 is not present in the array.</p>
        <h3>How to Approach</h3>
        <ol>
          <li>Set two pointers: <code>left</code> at the beginning and <code>right</code> at the end.</li>
          <li>Find the middle index.</li>
          <li>Compare the middle element with the target.</li>
          <li>If they are equal, return the middle index.</li>
          <li>If the target is smaller, move the right pointer.</li>
          <li>If the target is greater, move the left pointer.</li>
          <li>Continue until the search range becomes empty.</li>
        </ol>
        <h3>Important</h3>
        <p>
          The input array is already sorted in ascending order.
          Do not use Python's built-in search functions.
        </p>
      `,
      constraints: `
        <ul>
          <li>1 ≤ n ≤ 100000</li>
          <li>Array is sorted in ascending order.</li>
          <li>All elements are integers.</li>
          <li>Expected time complexity: O(log n).</li>
        </ul>
      `,
      tags: ['Data Structures', 'Searching', 'Binary Search'],
      defaultCode: `def binary_search(arr, target):\n    # Write your code here\n    pass\n\nprint(binary_search([1, 3, 5, 7, 9], 5))`
    },
    'prac-2': {
      id: 'prac-2',
      title: 'Stack using Arrays',
      language: 'C',
      marks: 10,
      dueDate: 'Due tomorrow',
      description: `
        <h3>Problem Description</h3>
        <p>Implement a <strong>Stack</strong> data structure using an array. A stack follows the <strong>LIFO</strong> principle: <em>Last In, First Out</em>.</p>
        <p>This means the element inserted most recently is the first element that will be removed.</p>
        <h3>Operations</h3>
        <ul>
          <li><strong>push(value)</strong> - Adds an element to the top of the stack.</li>
          <li><strong>pop()</strong> - Removes and returns the top element.</li>
          <li><strong>peek()</strong> - Returns the top element without removing it.</li>
        </ul>
        <h3>Example</h3>
        <pre>
push(10)
push(20)
push(30)

Stack: [10, 20, 30]

pop()  → 30
peek() → 20
        </pre>
        <h3>How to Approach</h3>
        <ol>
          <li>Create an integer array to store the stack elements.</li>
          <li>Maintain a variable called <code>top</code>.</li>
          <li>Initially, set <code>top = -1</code>.</li>
          <li>For push, increase <code>top</code> and store the value.</li>
          <li>For pop, return the element at <code>top</code> and decrease <code>top</code>.</li>
          <li>For peek, return the element at <code>top</code> without changing it.</li>
          <li>Handle stack overflow and underflow cases.</li>
        </ol>
        <h3>Example Input</h3>
        <pre>
push(10)
push(20)
pop()
peek()
        </pre>
        <h3>Expected Output</h3>
        <pre>
20
10
        </pre>
      `,
      constraints: `
        <ul>
          <li>Maximum stack size is 1000.</li>
          <li>Each operation should take O(1) time.</li>
          <li>Handle empty-stack conditions properly.</li>
        </ul>
      `,
      tags: ['Data Structures', 'Stack', 'Arrays'],
      defaultCode: `#include <stdio.h>\n\n#define MAX 1000\n\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    // Write your code here\n}\n\nint pop() {\n    // Write your code here\n}\n\nint peek() {\n    // Write your code here\n}\n\nint main() {\n    return 0;\n}`
    },
    'prac-3': {
      id: 'prac-3',
      title: 'Linked List — Insertion & Deletion',
      language: 'C++',
      marks: 10,
      dueDate: 'Due in 3 days',
      description: `
        <h3>Problem Description</h3>
        <p>Implement a <strong>singly linked list</strong> that supports insertion of a node at the end and deletion of a node by its value.</p>
        <p>Each node contains two parts:</p>
        <ul>
          <li><strong>data</strong> - stores the value.</li>
          <li><strong>next</strong> - stores the address of the next node.</li>
        </ul>
        <h3>Required Operations</h3>
        <ul>
          <li>Insert a new node at the tail of the list.</li>
          <li>Delete the first node containing the given value.</li>
          <li>Handle an empty linked list.</li>
          <li>Handle deletion of the head node.</li>
        </ul>
        <h3>Example</h3>
        <pre>
Initial List:
10 → 20 → 30 → NULL

Insert 40:
10 → 20 → 30 → 40 → NULL

Delete 20:
10 → 30 → 40 → NULL
        </pre>
        <h3>How to Approach</h3>
        <ol>
          <li>Create a Node structure containing data and next.</li>
          <li>For insertion, traverse to the last node.</li>
          <li>Connect the last node to the newly created node.</li>
          <li>For deletion, search for the node containing the required value.</li>
          <li>Update the previous node's next pointer to skip the deleted node.</li>
          <li>Handle deletion of the first node separately.</li>
        </ol>
      `,
      constraints: `
        <ul>
          <li>Values are integers.</li>
          <li>Handle an empty list.</li>
          <li>Handle deletion of the head node.</li>
          <li>Use pointers correctly.</li>
        </ul>
      `,
      tags: ['Data Structures', 'Linked List', 'Pointers'],
      defaultCode: `#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\n// Write your insertion and deletion logic here\n\nint main() {\n    return 0;\n}`
    },
    'prac-4': {
      id: 'prac-4',
      title: 'Bubble Sort',
      language: 'Java',
      marks: 10,
      dueDate: 'Due this weekend',
      description: `
        <h3>Problem Description</h3>
        <p>Given an array of integers, sort the array in <strong>ascending order</strong> using the Bubble Sort algorithm.</p>
        <p>Bubble Sort repeatedly compares two adjacent elements. If the left element is greater than the right element, swap them.</p>
        <p>After every complete pass, the largest unsorted element moves toward the end of the array.</p>
        <h3>Example</h3>
        <pre>
Input:
[64, 34, 25, 12, 22, 11, 90]

Output:
[11, 12, 22, 25, 34, 64, 90]
        </pre>
        <h3>How to Approach</h3>
        <ol>
          <li>Start from the first element.</li>
          <li>Compare it with the next element.</li>
          <li>Swap them if they are in the wrong order.</li>
          <li>Continue comparing adjacent elements.</li>
          <li>Repeat the process for the remaining unsorted elements.</li>
          <li>Use a <code>swapped</code> flag to stop early if no swap occurs.</li>
        </ol>
        <h3>Optimization</h3>
        <p>If an entire pass completes without any swap, the array is already sorted and the algorithm can stop.</p>
      `,
      constraints: `
        <ul>
          <li>1 ≤ n ≤ 10000</li>
          <li>Array contains integers.</li>
          <li>Sort in ascending order.</li>
          <li>Use a swapped flag for early termination.</li>
        </ul>
      `,
      tags: ['Algorithms', 'Sorting', 'Arrays'],
      defaultCode: `public class Main {\n    public static void bubbleSort(int[] arr) {\n        // Write your code here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {64, 34, 25, 12, 22, 11, 90};\n        bubbleSort(arr);\n    }\n}`
    },
    'prac-5': {
      id: 'prac-5',
      title: 'Binary Search Tree (BST) — Insertion',
      language: 'Python',
      marks: 15,
      dueDate: 'Due next week',
      description: `
        <h3>Problem Description</h3>
        <p>Implement an insertion operation for a <strong>Binary Search Tree (BST)</strong>.</p>
        <p>A Binary Search Tree follows an important rule:</p>
        <ul>
          <li>Values smaller than a node are stored in its left subtree.</li>
          <li>Values greater than a node are stored in its right subtree.</li>
        </ul>
        <p>Given the root of a BST and a new integer value, insert the value into its correct position while maintaining the BST property.</p>
        <h3>Example</h3>
        <pre>
Initial Tree:

       50
      /  \\
    30    70

Insert 40:

       50
      /  \\
    30    70
      \\
      40
        </pre>
        <h3>How to Approach</h3>
        <ol>
          <li>Start from the root.</li>
          <li>Compare the new value with the current node.</li>
          <li>If the value is smaller, move to the left child.</li>
          <li>If the value is greater, move to the right child.</li>
          <li>Continue until an empty position is found.</li>
          <li>Create a new node and place it there.</li>
        </ol>
        <h3>Important</h3>
        <p>Node values are unique, so you do not need to insert duplicate values.</p>
      `,
      constraints: `
        <ul>
          <li>Node values are unique integers.</li>
          <li>Maintain the BST property after insertion.</li>
          <li>Expected time complexity: O(h), where h is the tree height.</li>
        </ul>
      `,
      tags: ['Trees', 'BST', 'Recursion'],
      defaultCode: `class Node:\n    def __init__(self, key):\n        self.left = None\n        self.right = None\n        self.val = key\n\ndef insert(root, key):\n    # Write your logic here\n    return root\n\nroot = Node(50)\nroot = insert(root, 30)`
    }
  };


  changeLanguage(): void {
    this.statusMessage = `Language changed to ${this.selectedLanguage}`;
  }

runCode(): void {
    if (this.isRunning) return;

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

    this.http.post<any>('https://practical-platform.onrender.com/run', request).subscribe({
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
        this.outputContent = response.stdout || 'Program executed successfully with no output.';
        this.statusMessage = 'Execution completed';
      },
      error: (error) => {
        console.error('Compiler Error:', error);
        this.isRunning = false;
        this.statusMessage = 'Execution Failed';
        this.outputContent = 'Unable to execute code. Please check your connection or backend server.';
      }
    });
  }

  // ==========================================
  // 2. Constructor
  // ==========================================
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}


  // ==========================================
  // 3. Lifecycle Hooks
  // ==========================================
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const problemId = params.get('id') || 'prac-1';
      if (this.problemsDb && this.problemsDb[problemId]) {
        this.problem = this.problemsDb[problemId];
        this.selectedLanguage = this.problem.language;
        this.codeContent = this.problem.defaultCode;
      }
    });
  }


  // ==========================================
  // 4. Methods
  // ==========================================
  submitSolution(): void {
    if (!this.problem || this.isSubmitting) return;

    this.isSubmitting = true;
    this.statusMessage = '🤖 Gemini is evaluating your solution...';

    // 1. Define the prompt clearly
  const prompt = `
      You are an automated expert coding judge for a student platform.
      Evaluate the following ${this.selectedLanguage} code:

      Problem Title: ${this.problem.title}
      Problem Constraints: ${this.problem.constraints}
      Student Code:
      ${this.codeContent}

      CRITICAL FORMATTING RULES FOR "aiTips":
      1. NEVER output a wall of text or dense paragraph.
      2. IF ALL TESTS PASS:
         - Start with: "🎉 **Congratulations! You solved it!**"
         - Follow with 2  points summarizing why the code is good (Complexity, Efficiency).
      3. IF ANY TEST FAILS:
         - Start with: "💡 **Hints to fix your code:**"
         - Follow with 2-3 concise,  hints focusing strictly on the bug or edge case missed.

      Return ONLY raw JSON matching this structure:
      {
        "problemId": "${this.problem.id}",
        "title": "${this.problem.title}",
        "status": "Success",
        "passCount": 4,
        "failCount": 0,
        "testCaseResults": [
          { "test": 1, "passed": true, "message": "Passed standard sorted array." },
          { "test": 2, "passed": true, "message": "Passed single element edge case." }
        ],
        "aiTips": "🎉 **Congratulations! You solved it!**\\n\\n* **Correctness:** Logic correctly handles all edge cases.\\n* **Optimization:** Early termination flag gives O(N) best-case complexity."
      }
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // 2. Build the exact Request Body Google expects
    const body = {
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ],
      // Forces Gemini to output pure JSON mapping to your schema
      generationConfig: {
        responseMimeType: "application/json"
      }
    };

    // 3. Use the updated model endpoint (gemini-2.5-flash) to prevent 404s
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.GEMINI_API_KEY}`;

    // 4. Make the HTTP Post call
    this.http.post<any>(geminiUrl, body, { headers }).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;
        try {
          // Extract the text from the nested Gemini response structure
          let aiText = res.candidates?.[0]?.content?.parts?.[0]?.text;

          if (!aiText) {
            throw new Error('Empty response payload from Gemini');
          }

          // Strip markdown code blocks just in case Gemini includes them
          aiText = aiText.replace(/```json/gi, '').replace(/```/g, '').trim();

          const aiEvaluationResponse = JSON.parse(aiText);

          console.log('Gemini Evaluation Success:', aiEvaluationResponse);

          // Route to results page with the JSON payload
          this.router.navigate(['/student/results'], {
            state: { evaluationResult: aiEvaluationResponse }
          });

        } catch (e) {
          console.error('JSON Parsing or Payload Error:', e, res);
          this.statusMessage = 'Error processing AI response. Check console logs.';
        }
      },
      error: (err: any) => {
        console.error('Gemini API Error:', err);
        this.isSubmitting = false;

        // Detailed error logging for UI
        if (err.status === 404) {
          this.statusMessage = 'Error 404: Model endpoint not found. Verify the model name in the URL.';
        } else if (err.status === 400) {
          this.statusMessage = 'Error 400: Invalid request structure or missing API key.';
        } else {
          this.statusMessage = `API Error (${err.status}): Check your network connection.`;
        }
      }
    });
  }
}
