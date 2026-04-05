import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss']
})
export class AuthComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  @Input() role: 'student' | 'faculty' = 'student';
  @Output() close = new EventEmitter<void>();

  studentForm!: FormGroup;
  facultyForm!: FormGroup;

  ngOnInit(): void {
    // STUDENT FORM
    this.studentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      classroomCode: ['', [Validators.required]]
    });

    // FACULTY FORM
    this.facultyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  closeModal() {
    this.close.emit();
  }

  onStudentSubmit() {
    if (this.studentForm.valid) {
      const { email, password, classroomCode } = this.studentForm.value;

      // Student Demo Credentials
      if (email === 'name@gmail.com' && password === 'pass@123' && classroomCode === 'AAAA') {
        console.log('Student Login Success!');
        this.closeModal();
        this.router.navigate(['/student/home']);
      } else {
        alert('Invalid Student Credentials!');
      }
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  onFacultySubmit() {
    if (this.facultyForm.valid) {
      const { email, password } = this.facultyForm.value;

      // FACULTY DEMO CREDENTIALS
      // Email: vivek@ycce.edu | Pass: faculty123
      if (email === 'vivek@ycce.edu' && password === 'faculty123') {
        console.log('Faculty Login Success!');

        // Modal band karo
        this.closeModal();

        // NAVIGATE TO FACULTY DASHBOARD
        // Ensure aapne routing mein path 'faculty/dashboard' ya sirf 'faculty' rakha ho
        this.router.navigate(['/faculty/dashboard']);

      } else {
        alert('Invalid Faculty Credentials! \nEmail: vivek@ycce.edu\nPass: faculty123');
      }
    } else {
      this.facultyForm.markAllAsTouched();
    }
  }
}
