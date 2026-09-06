import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. LANDING PAGE (Entry point)
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing').then(m => m.LandingComponent)
  },

  // 2. STUDENT DASHBOARD UNIVERSE (Green Theme)
  {
    path: 'student',
    loadComponent: () =>
      import('./student-dashboard/student-dashboard').then(m => m.StudentDashboardComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./student-dashboard/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'Practicals',
        loadComponent: () =>
          import('./student-dashboard/praticals/praticals').then(m => m.PracticalsComponent)
      },
      {
  path: 'solve',
  loadComponent: () =>
    import('./student-dashboard/solve/solve').then(m => m.SolveComponent)
},
       {
  path: 'solve/:id', // <--- Must include /:id so the router accepts the practical ID
  loadComponent: () =>
    import('./student-dashboard/solve/solve').then(m => m.SolveComponent)
},
      {
  path: 'practice',
  loadComponent: () =>
    import('./student-dashboard/practice/practice')
      .then(m => m.PracticeComponent)
},
      {
        path: 'results',
        loadComponent: () =>
          import('./student-dashboard/result/result').then(m => m.ResultComponent)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./student-dashboard/profile/profile').then(m => m.ProfileComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  // 3. FACULTY DASHBOARD UNIVERSE (Purple Theme)
  {
    path: 'faculty',
    loadComponent: () =>
      import('./faculty/layout/layout').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./faculty/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'classrooms',
        loadComponent: () =>
          import('./faculty/classrooms/classrooms').then(m => m.Classrooms)
      },
      {
        path: 'assign-practical',
        loadComponent: () =>
          import('./faculty/assign-practical/assign-practical').then(m => m.AssignPractical)
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./faculty/results/results').then(m => m.Results)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
  path: 'practicals',
  loadComponent: () => import('./faculty/practicals/practicals.component').then(m => m.PracticalsComponent)
},
{
  path: 'students',
  loadComponent: () => import('./faculty/students/students.component').then(m => m.StudentsComponent)
},
{
  path: 'profile',
  loadComponent: () => import('./faculty/profile/profile.component').then(m => m.ProfileComponent)
}
    ]
  },

  // 4. WILDCARD ROUTE (Safety Net)
  // If user types a wrong URL, redirect them back to Landing Page
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
