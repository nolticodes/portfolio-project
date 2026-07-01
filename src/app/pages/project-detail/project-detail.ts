import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  projects = [
    {
      name: 'Join',
      slug: 'join',
      widthLine: '100px',
      description: 'home.projectDetails.join.description',
      implemantationDetails: 'home.projectDetails.join.implementation',
      imageUrl: './assets/img/projects/Laptop.svg',
      technologies: [
        {
          name: 'Angular',
          imageUrl: './assets/icons/frontend_skills/Angular.svg',
        },
        {
          name: 'TypeScript',
          imageUrl: './assets/icons/frontend_skills/Ts.svg',
        },
        {
          name: 'SCSS',
          imageUrl: './assets/icons/frontend_skills/CSS.svg',
        },
      ],
      duration: 'home.projectDetails.join.duration',
      linkGithub: 'https://github.com/nolticodes/',
      linkLiveTest: '',
    },
    {
      name: 'El Pollo Loco',
      slug: 'el-pollo-loco',
      widthLine: '320px',
      description: 'home.projectDetails.elPolloLoco.description',
      implemantationDetails: 'home.projectDetails.elPolloLoco.implementation',
      imageUrl: './assets/img/projects/pollo.png',
      technologies: [
        {
          name: 'HTML',
          imageUrl: './assets/icons/frontend_skills/HTML.svg',
        },
        {
          name: 'CSS',
          imageUrl: './assets/icons/frontend_skills/CSS.svg',
        },
        {
          name: 'JavaScript',
          imageUrl: './assets/icons/frontend_skills/Js.svg',
        },
      ],
      duration: 'home.projectDetails.elPolloLoco.duration',
      linkGithub: 'https://github.com/nolticodes/game_jump_and_run_el_pollo_loco',
      linkLiveTest: '',
    },
    {
      name: 'Pokedex',
      slug: 'pokemon',
      widthLine: '250px',
      description: 'home.projectDetails.pokemon.description',
      implemantationDetails: 'home.projectDetails.pokemon.implementation',
      imageUrl: './assets/img/projects/pokedex.png',
      technologies: [
        {
          name: 'HTML',
          imageUrl: './assets/icons/frontend_skills/HTML.svg',
        },
        {
          name: 'CSS',
          imageUrl: './assets/icons/frontend_skills/CSS.svg',
        },
        {
          name: 'REST-API',
          imageUrl: './assets/icons/frontend_skills/Rest-Api.svg',
        },
        {
          name: 'JavaScript',
          imageUrl: './assets/icons/frontend_skills/Js.svg',
        },
      ],
      duration: 'home.projectDetails.pokemon.duration',
      linkGithub: 'https://github.com/nolticodes/pokedex_app',
      linkLiveTest: '',
    }
  ];

  project = this.projects[0];

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      const foundProject = this.projects.find(project => project.slug === slug);

      if (foundProject) {
        this.project = foundProject;
      }
    });
  }

  goToNextProject() {
    const currentIndex = this.projects.findIndex(
      project => project.slug === this.project.slug
    );
    const nextIndex = (currentIndex + 1) % this.projects.length;
    const nextProject = this.projects[nextIndex];

    this.router.navigate(['/projects', nextProject.slug]);
  }

}