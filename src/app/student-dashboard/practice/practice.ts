import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practice.html',
  styleUrls: ['./practice.scss']
})
export class PracticeComponent {

  availableLanguages = [
    'Python',
    'C',
    'C++',
    'Java',
    'JavaScript'
  ];

  selectedLanguage = 'Python';

  codeContent = `# Write your code here

print("Hello World")`;

  inputContent = '';

  outputContent = '';

  isRunning = false;

  statusMessage = '';

  private languageIds: { [key: string]: number } = {
    'C': 50,
    'C++': 54,
    'Java': 62,
    'Python': 71,
    'JavaScript': 63
  };

  constructor(private http: HttpClient) {}

  changeLanguage(): void {

    const starterCode: { [key: string]: string } = {

      'C': `#include <stdio.h>

int main() {

    // Write your code here

    return 0;
}`,

      'C++': `#include <iostream>
using namespace std;

int main() {

    // Write your code here

    return 0;
}`,

      'Java': `import java.util.*;

public class Main {

    public static void main(String[] args) {

        // Write your code here

    }
}`,

      'Python': `# Write your code here

print("Hello World")`,

      'JavaScript': `// Write your code here

console.log("Hello World");`
    };

    this.codeContent = starterCode[this.selectedLanguage];

    this.inputContent = '';

    this.outputContent = '';

    this.statusMessage = '';
  }

  runCode(): void {

    if (!this.codeContent.trim()) {
      this.statusMessage = 'Please enter some code.';
      return;
    }

    this.isRunning = true;
    this.outputContent = '';
    this.statusMessage = 'Executing...';

    const requestBody = {
      code: this.codeContent,
      language_id: this.languageIds[this.selectedLanguage],
      stdin: this.inputContent
    };

    this.http.post<any>(
  'https://practical-platform.onrender.com/run',
  requestBody
).subscribe({

      next: (response) => {

        this.isRunning = false;

        if (response.compile_output) {

          this.outputContent = response.compile_output;
          this.statusMessage = 'Compilation Error';

        } else if (response.stderr) {

          this.outputContent = response.stderr;
          this.statusMessage = 'Runtime Error';

        } else {

          this.outputContent =
            response.stdout || 'No output';

          this.statusMessage = 'Execution completed';
        }
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
}