import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component')
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component')
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.routes').then(r => r.routes)
  },
  {
    path: 'concat',
    loadComponent: () => import('./modules/contact/contact.component')
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }
];
