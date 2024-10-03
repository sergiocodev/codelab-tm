import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./courses.component'),
  },
  {
    path: 'info/:course',
    loadComponent: () => import('./pages/info/info.component')
  },
  {
    path: 'payment/:id',
    loadComponent: () => import('./pages/payment/payment.component')
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./pages/payment-success/payment-success.component')
  },
  {
    path: 'payment-error',
    loadComponent: () => import('./pages/payment-error/payment-error.component')
  }
];
