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

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  isEnglish = true;
  isNavOpen = false;

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  setLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish;
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

  router = inject(Router);

  isProjectPage() {
    return this.router.url.includes('/projects/');
  }
}
