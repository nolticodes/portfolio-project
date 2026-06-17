import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projectData = [
  {
    name: "Join",
    description: "...",
    imageUrl: "/assets/img/projects/Laptop.svg",
  },
  {
    name: "El Pollo Loco",
    description: "...",
    imageUrl: "/assets/img/projects/Pollo.svg",
  },
  {
    name: "Pokemon",
    description: "...",
    imageUrl: "/assets/img/projects/Pollo.svg",
  },
];
  
}
