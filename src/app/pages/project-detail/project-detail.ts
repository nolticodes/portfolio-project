import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  projects = [
    {
      name: 'Join',
      slug: 'join',
      description: 'Task management app',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Laptop.svg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      duration: '3 Weeks',
      linkGithub: '',
      linkLiveTest: '',
    },
    {
      name: 'El Pollo Loco',
      slug: 'el-pollo-loco',
      description: 'Jump and run game',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Pollo.svg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      duration: '3 Weeks',
      linkGithub: '',
      linkLiveTest: '',
    },
    {
      name: 'Pokemon',
      slug: 'pokemon',
      description: 'Jump and run game',
      implemantationDetails: '...',
      imageUrl: '/assets/img/projects/Pollo.svg',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      duration: '3 Weeks',
      linkGithub: '',
      linkLiveTest: '',
    }
  ];

  project = this.projects.find(project =>
    project.slug === this.route.snapshot.paramMap.get('slug')
  );
}