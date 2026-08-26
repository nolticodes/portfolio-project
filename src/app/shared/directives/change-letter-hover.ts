import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject
} from '@angular/core';

@Directive({
  selector: '[appChangeLetterHover]',
  standalone: true
})
export class ChangeLetterHover implements AfterViewInit {
  private el = inject(ElementRef);

  /** Creates the letter spans and adds the hover events after the view is initialized. */
  ngAfterViewInit() {
    this.createLetterSpans();
    this.addHoverEvents();
  }

  /** Wraps every letter of the element's text in a separate span. */
  private createLetterSpans() {
    const text = this.el.nativeElement.innerText;
    const letters = text.split('');
    let lettersSpan = '';

    for (let i = 0; i < letters.length; i++) {
      lettersSpan += `<span>${letters[i]}</span>`;
    }

    this.el.nativeElement.innerHTML = lettersSpan;
  }

  /** Adds the color and capitalization effects when hovering over a letter. */
  private addHoverEvents() {
    const spans = this.el.nativeElement.querySelectorAll('span');

    spans.forEach((span: HTMLElement) => {
      const originalLetter = span.innerText;

      span.addEventListener('mouseenter', () => {
        span.style.color = '#F7C518';

        if (this.isCapitalLetter(originalLetter)) {
          span.innerText = originalLetter.toLowerCase();
        } else {
          span.innerText = originalLetter.toUpperCase();
        }
      });

      span.addEventListener('mouseleave', () => {
        span.style.color = 'white';
        span.innerText = originalLetter;
      });
    });
  }

  constructor() {
  }

  /** Checks whether the provided character is an uppercase letter. */
  isCapitalLetter(innerSpan: string): boolean {
    return innerSpan === innerSpan.toUpperCase();
  }
}