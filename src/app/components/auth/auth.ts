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
    // STUDENT FORM: Must have email, password, AND classroomCode to match HTML
    this.studentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      classroomCode: ['', [Validators.required]]
    });

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

      // Checking for your specific credentials
      if (email === 'name@gmail.com' && password === 'pass@123' && classroomCode === 'AAAA') {
        console.log('Login Success!');
        this.closeModal();
        // Use the route path exactly as defined in your app.routes.ts
        this.router.navigate(['/student/home']);
      } else {
        alert('Invalid Credentials! \nEmail: name@gmail.com\nPass: pass@123\nCode: AAAA');
      }
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  onFacultySubmit() {
    if (this.facultyForm.valid) {
      this.closeModal();
      // this.router.navigate(['/faculty/home']);
    }
  }
}
