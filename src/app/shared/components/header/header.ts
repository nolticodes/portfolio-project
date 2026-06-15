import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
