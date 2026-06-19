import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
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
      description: 'Task management app',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Laptop.svg',
      technologies: [
        {
          name: 'Angular',
          imageUrl: '',
        },
        {
          name: 'TypeScript',
          imageUrl: '/assets/icons/frontend_skills/Ts.svg',
        },
        {
          name: 'SCSS',
          imageUrl: '/assets/icons/frontend_skills/CSS.svg',
        },
      ],
      duration: '3 Weeks',
      linkGithub: 'https://github.com/nolticodes/',
      linkLiveTest: '',
    },
    {
      name: 'El Pollo Loco',
      slug: 'el-pollo-loco',
      description: 'Jump and run game',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Pollo.svg',
      technologies: [
        {
          name: 'Angular',
          imageUrl: '/assets/icons/frontend_skills/Angular.svg',
        },
        {
          name: 'TypeScript',
          imageUrl: '/assets/icons/frontend_skills/Ts.svg',
        },
        {
          name: 'SCSS',
          imageUrl: '/assets/icons/frontend_skills/CSS.svg',
        },
      ],
      duration: '3 Weeks',
      linkGithub: 'https://github.com/nolticodes/game_jump_and_run_el_pollo_loco',
      linkLiveTest: '',
    },
    {
      name: 'Pokemon',
      slug: 'pokemon',
      description: 'Jump and run game',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Pollo.svg',
      technologies: [
        {
          name: 'Angular',
          imageUrl: '',
        },
        {
          name: 'TypeScript',
          imageUrl: '/assets/icons/frontend_skills/Ts.svg',
        },
        {
          name: 'SCSS',
          imageUrl: '/assets/icons/frontend_skills/CSS.svg',
        },
      ],
      duration: '3 Weeks',
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