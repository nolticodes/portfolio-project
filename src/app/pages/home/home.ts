import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/home/hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
