import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  /** Contains the testimonial information displayed in the testimonials section. */
  testimonials = [
    {
      cardImage: 'assets/img/testimonials/testimonial_a.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Kevin Schumacher',
      commentKey: 'home.testimonials.comment_one',
      profileUrl: 'https://www.linkedin.com/in/kevin-schumacher-a14b68418/',
      rotationClass: 'rotate_left',
    },
    {
      cardImage: 'assets/img/testimonials/testimonial_b.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Jermaine J. Bärwolf',
      commentKey: 'home.testimonials.comment_two',
      profileUrl: 'https://www.linkedin.com/in/jermaine-jérôme-bärwolf-408703287/',
      rotationClass: '',
    },
    {
      cardImage: 'assets/img/testimonials/testimonial_a.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Jonathan Janke',
      commentKey: 'home.testimonials.comment_three',
      profileUrl: 'https://de.linkedin.com',
      rotationClass: 'rotate_right',
    },
  ];
}