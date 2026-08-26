import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ChangeLetterHover } from '../../../directives/change-letter-hover';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ChangeLetterHover, TranslatePipe, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  defaultText = 'Hello World';
  hoverText = "I'm Denis Nolting";
  displayText = this.defaultText;

  /** Changes the displayed text after a short delay when the pointer enters the element. */
  onMouseEnter(): void {
    setTimeout(() => {
      this.displayText = this.hoverText;
    }, 200);
  }

  /** Restores the default text when the pointer leaves the element. */
  onMouseLeave(): void {
    this.displayText = this.defaultText;
  }
}