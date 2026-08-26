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

  /** Changes the active language and updates the language toggle state. */
  switchLanguage(language: 'en' | 'de'): void {
    this.isEnglish = language === 'en';
    this.translate.use(language);
  }

  /** Switches between the English and German languages. */
  toggleLanguage(): void {
    const newLanguage = this.isEnglish ? 'de' : 'en';
    this.switchLanguage(newLanguage);
  }

  /** Opens or closes the navigation menu and updates the page's scroll state. */
  toggleMenu(): void {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  /** Closes the navigation menu and restores page scrolling. */
  closeMenu(): void {
    this.isNavOpen = false;
    document.body.classList.remove('no-scroll');
  }

  /** Checks whether the current route belongs to a project detail page. */
  isProjectPage(): boolean {
    return this.router.url.includes('/projects/');
  }
}