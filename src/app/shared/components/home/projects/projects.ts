import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projectData = [
  {
    name: "Join",
    slug: "join",
    description: "...",
    imageUrl: "/assets/img/projects/Laptop.svg",
    path: "https://www.google.com/"
  },
  {
    name: "El Pollo Loco",
    slug: "el-pollo-loco",
    description: "...",
    imageUrl: "/assets/img/projects/Pollo.svg",
    path: "https://www.google.com/",
  },
  {
    name: "Pokemon",
    slug: "pokemon",
    description: "...",
    imageUrl: "/assets/img/projects/Pollo.svg",
    path: "https://www.google.com/"
  },
];
  
}
