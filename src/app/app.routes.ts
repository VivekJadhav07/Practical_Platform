import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // 1. Landing Page
    path: '',
    loadComponent: () => import('./landing/landing').then(m => m.LandingComponent)
  },
  {
    // 2. Student Dashboard Area
    // This loads the Layout (Sidebar + Navbar)
    path: 'student',
    loadComponent: () =>
      import('./student-dashboard/student-dashboard').then(m => m.StudentDashboardComponent),
    children: [
      {
        // Default view: /student/home
        path: 'home',
        loadComponent: () =>
          import('./student-dashboard/home/home').then(m => m.HomeComponent)
      },
         { path: 'Practicals',
           loadComponent:() =>
            import('./student-dashboard/praticals/praticals').then(m => m.PracticalsComponent)
          },
          {
            path: 'solve',
            loadComponent: () =>
              import('./student-dashboard/solve/solve').then(m => m.SolveComponent)
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
           /* Future routes go here:
         { path: 'solve', loadComponent: ... },
      */
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    // 3. Wildcard route
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
