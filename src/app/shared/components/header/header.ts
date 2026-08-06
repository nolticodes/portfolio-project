import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);
  private router = inject(Router);

  isEnglish = true;
  isNavOpen = false;

  switchLanguage(language: 'en' | 'de') {
    this.isEnglish = language === 'en';
    this.translate.use(language);
  }

  toggleLanguage() {
    const newLanguage = this.isEnglish ? 'de' : 'en';
    this.switchLanguage(newLanguage);
  }

  toggleMenu() {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMenu() {
    this.isNavOpen = false;
    document.body.classList.remove('no-scroll');
  }

  isProjectPage() {
    return this.router.url.includes('/projects/');
  }
}
