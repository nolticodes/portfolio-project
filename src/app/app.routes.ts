import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Copyright } from './pages/copyright/copyright';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projects/:slug',
    component: ProjectDetail,
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: 'copyright',
    component: Copyright,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '**',
    redirectTo: '',
  },
];