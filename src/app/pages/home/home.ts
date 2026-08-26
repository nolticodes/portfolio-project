import { Component } from '@angular/core';
import { AboutMe } from '../../shared/components/home/about-me/about-me';
import { Skills } from '../../shared/components/home/skills/skills';
import { Testimonials } from '../../shared/components/home/testimonials/testimonials';
import { Projects } from "../../shared/components/home/projects/projects";
import { Contact } from '../../shared/components/home/contact/contact';
import { Hero } from "../../shared/components/home/hero/hero";

@Component({
  selector: 'app-home',
  imports: [AboutMe, Skills, Testimonials, Projects, Contact, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
