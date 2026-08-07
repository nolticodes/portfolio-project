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

  router = inject(Router);

  isLegalNoticePage() {
    return this.router.url === '/legal-notice';
  }

  isPolicyPage() {
    return this.router.url === '/privacy-policy';
  }

  @HostBinding('class.footer-static')
  get isStaticPage() {
    return [
      '/legal-notice',
      '/privacy-policy'
    ].includes(this.router.url);
  }

  get linkedinIcon() {
    return './assets/icons/contact_icons/linkedin_black.svg';
  }

  get githubIcon() {
    return './assets/icons/contact_icons/github_black.svg';
  }

  get mailIcon() {
    return './assets/icons/contact_icons/mail_black.svg';
  }

  isProjectPage() {
    return this.router.url.includes('/projects/');
  }
}
