import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appChangeLetterHover]',
  standalone: true
})
export class ChangeLetterHover implements AfterViewInit {
  private el = inject(ElementRef)

  ngAfterViewInit() {
    this.createLetterSpans();
    this.addHoverEvents();
  }

  private createLetterSpans() {
    const text = this.el.nativeElement.innerText;
    const letters = text.split('');
    let lettersSpan = '';

    for (let i = 0; i < letters.length; i++) {
      lettersSpan += `<span>${letters[i]}</span>`;
    }

    this.el.nativeElement.innerHTML = lettersSpan;
  }

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

  isCapitalLetter(innerSpan: string): boolean {
    return innerSpan === innerSpan.toUpperCase()
  }


}
