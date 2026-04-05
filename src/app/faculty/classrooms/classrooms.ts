import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classrooms.html',
  styleUrls: ['./classrooms.scss']
})
export class Classrooms {
  classrooms = [
    { 
      id: 1, 
      name: 'Data Structures', 
      semester: 'Sem IV', 
      dept: 'CSE', 
      students: 32, 
      practicals: 8, 
      progress: 63, 
      code: 'DS2026', 
      icon: '📂', 
      color: '#534AB7', 
      colorLight: '#EEEDFE' 
    },
    { 
      id: 2, 
      name: 'DBMS', 
      semester: 'Sem V', 
      dept: 'CSE', 
      students: 28, 
      practicals: 10, 
      progress: 40, 
      code: 'DB2026', 
      icon: '🗄️', 
      color: '#BA7517', 
      colorLight: '#FAEEDA' 
    },
    { 
      id: 3, 
      name: 'Computer Networks', 
      semester: 'Sem VI', 
      dept: 'CSE', 
      students: 27, 
      practicals: 6, 
      progress: 100, 
      code: 'CN2026', 
      icon: '🌐', 
      color: '#1D9E75', 
      colorLight: '#E1F5EE' 
    }
  ];

  viewClass(id: number) {
    console.log('Navigating to class details for ID:', id);
    // Logic: this.router.navigate(['/faculty/classrooms', id]);
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
    alert('Join code ' + code + ' copied to clipboard!');
  }

  openCreateModal() {
    alert('Opening "Create New Classroom" form...');
  }
}