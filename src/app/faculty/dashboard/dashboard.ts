import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard{
  // Class Overview Data - Image ke matching values
  classes = [
    { 
      name: 'Data Structures', 
      icon: '</>', 
      students: 32, 
      practicals: 8, 
      assigned: 5, 
      total: 8 
    },
    { 
      name: 'DBMS', 
      icon: '🗄️', 
      students: 28, 
      practicals: 10, 
      assigned: 8, 
      total: 10 
    },
    { 
      name: 'Computer Networks', 
      icon: '✉️', 
      students: 27, 
      practicals: 6, 
      assigned: 6, 
      total: 6 
    }
  ];

  // Recent Activity Data - Image ke matching events
  activities = [
    { 
      student: 'Rohit Kulkarni', 
      action: 'submitted Binary Search', 
      subject: 'Data Structures', 
      meta: 'Score: 9/10', 
      time: '2m ago', 
      color: '#1D9E75' 
    },
    { 
      student: 'Amit Meshram', 
      action: 'submitted Binary Search', 
      subject: 'Data Structures', 
      meta: 'Score: 10/10', 
      time: '15m ago', 
      color: '#1D9E75' 
    },
    { 
      student: 'Priya Pawar', 
      action: 'joined DS2024 classroom', 
      subject: 'Data Structures', 
      meta: '', 
      time: '1h ago', 
      color: '#534AB7' 
    },
    { 
      student: 'Stack arrays', 
      action: 'due date approaching', 
      subject: 'DBMS', 
      meta: '4 students pending', 
      time: '2h ago', 
      color: '#BA7517' 
    },
    { 
      student: 'Linked List practical', 
      action: 'auto-graded', 
      subject: 'Data Structures', 
      meta: '32/32 graded', 
      time: 'Yesterday', 
      color: '#1D9E75' 
    }
  ];
}