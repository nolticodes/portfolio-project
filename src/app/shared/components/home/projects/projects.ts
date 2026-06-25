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
    description: "home.projects.description.join",
    imageUrl: "/assets/img/projects/Laptop.svg",
    path: "https://www.google.com/"
  },
  {
    name: "El Pollo Loco",
    slug: "el-pollo-loco",
    description: "home.projects.description.elPolloLoco",
    imageUrl: "/assets/img/projects/pollo.png",
    path: "https://www.google.com/",
  },
  {
    name: "Pokedex",
    slug: "pokemon",
    description: "home.projects.description.pokemon",
    imageUrl: "/assets/img/projects/pokedex.png",
    path: "https://www.google.com/"
  },
];
  
}
