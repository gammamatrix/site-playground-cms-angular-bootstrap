import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'CMS Dashboard'
  },
  {
    path: 'sitemap',
    component: SitemapComponent,
    title: 'CMS Sitemap'
  }
];
