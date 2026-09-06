import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  // Default fallback mock data (used if page is accessed directly without submitting)
  resultData: PracticalResult = {
    score: 0,
    maxScore: 10,
    title: 'Code Evaluation Result',
    category: 'Data Structures',
    language: 'Submission',
    submittedAt: 'Just now',
    testsPassed: 0,
    totalTests: 0,
    edgeCasesMissed: 0,
    feedback: 'No evaluation data found.'
  };

  testCases: TestCaseResult[] = [];

  constructor(private router: Router) {
    // 1. Capture navigation state sent from SolveComponent
    const navigation = this.router.getCurrentNavigation();
    const aiResponse = navigation?.extras?.state?.['evaluationResult'] || history.state?.['evaluationResult'];

    // 2. Parse real AI evaluation data into your UI format
    if (aiResponse) {
      this.populateAiData(aiResponse);
    }
  }

  ngOnInit(): void {}

  private populateAiData(aiResponse: any): void {
    const total = (aiResponse.passCount || 0) + (aiResponse.failCount || 0);
    const passCount = aiResponse.passCount || 0;
    const calculatedScore = total > 0 ? Math.round((passCount / total) * 10) : 0;

    // Map AI response to resultData object
    this.resultData = {
      score: calculatedScore,
      maxScore: 10,
      title: aiResponse.title || 'Practical Assessment',
      category: 'Practical Problem',
      language: 'Submitted Code',
      submittedAt: 'Submitted just now',
      testsPassed: passCount,
      totalTests: total,
      edgeCasesMissed: aiResponse.failCount || 0,
      feedback: aiResponse.aiTips || 'Great effort! Review test cases for edge case failures.'
    };

    // Map AI test cases array to the HTML testCases structure
    if (Array.isArray(aiResponse.testCaseResults)) {
      this.testCases = aiResponse.testCaseResults.map((tc: any, index: number) => ({
        id: tc.test || index + 1,
        name: `Test Case ${tc.test || index + 1}`,
        details: tc.message || 'No additional details.',
        status: tc.passed ? 'Pass' : 'Fail'
      }));
    }
  }
}
