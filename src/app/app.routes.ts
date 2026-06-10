import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Copyright } from './pages/copyright/copyright';
import { Impressum } from './pages/impressum/impressum';

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
    path: 'impressum',
    component: Impressum,
  },
  {
    path: '**',
    redirectTo: '',
  },
];