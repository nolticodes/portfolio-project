import { Component, inject } from '@angular/core';
import { ChangeLetterHover } from '../../../directives/change-letter-hover';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [ChangeLetterHover, TranslatePipe],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})

export class HeroSection {
  private translate = inject(TranslateService);

  displayText = '';
  defaultText = '';
  hoverText = '';
  developerText = '';

  private nextText = '';

  isHovered = false;
  isTextFading = false;
  isTextShrinking = false;
  isHandLeaving = false;

  constructor() {
    this.setHeroTexts();

    this.translate.onLangChange.subscribe(() => {
      this.setHeroTexts();
    });
  }

  private setHeroTexts() {
    this.defaultText = this.translate.instant('home.hero.helloWorld');
    this.hoverText = this.translate.instant('home.hero.iBims');

    this.displayText = this.isHovered ? this.hoverText : this.defaultText;
    this.nextText = this.displayText;
  }

  onMouseEnter() {
    this.isHovered = true;
    this.isHandLeaving = false;
    this.isTextShrinking = false;
    this.changeHeroText(this.hoverText);
  }

  onMouseLeave() {
    this.isHovered = false;
    this.isHandLeaving = true;
    this.isTextShrinking = true;
    this.changeHeroText(this.defaultText);
  }

  changeHeroText(newText: string) {
    if (newText === this.displayText) return;

    this.nextText = newText;
    this.isTextFading = true;
  }

  onTextTransitionEnd(event: TransitionEvent) {
    if (event.propertyName !== 'opacity') return;
    if (!this.isTextFading) return;

    this.displayText = this.nextText;
    this.isTextFading = false;
  }

  onTextAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'wobbleShrink') {
      this.isTextShrinking = false;
    }
  }

  onHandAnimationEnd() {
    if (this.isHandLeaving) {
      this.isHandLeaving = false;
    }
  }
}