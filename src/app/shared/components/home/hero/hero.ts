import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ChangeLetterHover } from '../../../directives/change-letter-hover';

@Component({
  selector: 'app-hero',
  imports: [ChangeLetterHover, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  defaultText = 'Hello World';
  hoverText = "I'm Denis Nolting";
  displayText = this.defaultText;

  onMouseEnter() {
    setTimeout(() => {
      this.displayText = this.hoverText;
    }, 200);
  }

  onMouseLeave() {
    this.displayText = this.defaultText;
  }
}
