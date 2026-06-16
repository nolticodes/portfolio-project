import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/home/hero-section/hero-section';
import { AboutMe } from '../../shared/components/home/about-me/about-me';
import { Skills } from '../../shared/components/home/skills/skills';

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutMe, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
