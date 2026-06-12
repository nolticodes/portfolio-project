import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/home/hero-section/hero-section';
import { AboutMe } from '../../shared/components/home/about-me/about-me';

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
