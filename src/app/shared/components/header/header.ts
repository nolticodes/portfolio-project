import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
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
  }
}
