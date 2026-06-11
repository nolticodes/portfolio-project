import { Component } from '@angular/core';
import { ChangeLetterHover } from '../../../directives/change-letter-hover';

@Component({
  selector: 'app-hero-section',
  imports: [ChangeLetterHover],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {

}
