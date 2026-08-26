import { Component, inject, HostBinding } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router = inject(Router);

  /** Checks whether the current route is the legal notice page. */
  isLegalNoticePage(): boolean {
    return this.router.url === '/legal-notice';
  }

  /** Checks whether the current route is the privacy policy page. */
  isPolicyPage(): boolean {
    return this.router.url === '/privacy-policy';
  }

  /** Checks whether the current route belongs to a static legal page. */
  @HostBinding('class.footer-static')
  get isStaticPage(): boolean {
    const currentPath = this.router.url.split(/[?#]/)[0];

    return [
      '/legal-notice',
      '/privacy-policy',
    ].includes(currentPath);
  }

  /** Returns the appropriate LinkedIn icon for the current page. */
  get linkedinIcon(): string {
    return this.isStaticPage
      ? './assets/icons/contact_icons/linkedin_black.svg'
      : './assets/icons/contact_icons/linkedin.svg';
  }

  /** Returns the appropriate GitHub icon for the current page. */
  get githubIcon(): string {
    return this.isStaticPage
      ? './assets/icons/contact_icons/github_black.svg'
      : './assets/icons/contact_icons/github.svg';
  }

  /** Returns the appropriate email icon for the current page. */
  get mailIcon(): string {
    return this.isStaticPage
      ? './assets/icons/contact_icons/mail_black.svg'
      : './assets/icons/contact_icons/mail.svg';
  }

  /** Checks whether the current route belongs to a project detail page. */
  isProjectPage(): boolean {
    return this.router.url.includes('/projects/');
  }
}