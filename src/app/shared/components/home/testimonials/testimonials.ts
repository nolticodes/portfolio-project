import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      cardImage: 'assets/img/testimonials/testimonial_a.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Weihnachtsmann',
      commentKey: 'home.testimonials.comment_one',
      profileUrl: 'https://de.linkedin.com',
      rotationClass: 'rotate_left'
    },
    {
      cardImage: 'assets/img/testimonials/testimonial_b.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Weihnachtsmann',
      commentKey: 'home.testimonials.comment_two',
      profileUrl: 'https://de.linkedin.com',
      rotationClass: ''
    },
    {
      cardImage: 'assets/img/testimonials/testimonial_a.svg',
      hoverImage: 'assets/img/testimonials/testimonial_hover.svg',
      name: 'Weihnachtsmann',
      commentKey: 'home.testimonials.comment_three',
      profileUrl: 'https://de.linkedin.com',
      rotationClass: 'rotate_right'
    }
  ];
}
