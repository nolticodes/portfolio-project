import { Component } from '@angular/core';
import { ChangeLetterHover } from '../../../directives/change-letter-hover';

@Component({
  selector: 'app-hero-section',
  imports: [ChangeLetterHover],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})

export class HeroSection {
  displayText = 'Hallo Welt';
  defaultText = 'Hallo Welt';
  hoverText = 'Ich bin Denis Nolting';

  private nextText = this.defaultText;
  isHovered = false;
  isTextFading = false;
  isTextShrinking = false;
  isHandLeaving = false;

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
}