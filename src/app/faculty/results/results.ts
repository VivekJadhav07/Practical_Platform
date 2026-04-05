import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrls: ['./results.scss']
})
export class Results { // Ensure class name matches your route
  
  // Is array ko add karne se error chali jayegi
  students = [
    { name: 'Rohit Kulkarni', roll: 'CS21045', status: 'Passed', tests: '5/5', score: 10 },
    { name: 'Amit Meshram', roll: 'CS21012', status: 'Passed', tests: '4/5', score: 8 },
    { name: 'Priya Pawar', roll: 'CS21067', status: 'Failed', tests: '1/5', score: 2 },
    { name: 'Vivek Deshpande', roll: 'CS21031', status: 'Pending', tests: '—', score: 0 },
    { name: 'Sneha Kulthe', roll: 'CS21055', status: 'Passed', tests: '5/5', score: 10 }
  ];

}