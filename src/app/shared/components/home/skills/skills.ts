import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  private cdr = inject(ChangeDetectorRef)

  frontendSkills = [
    { name: "HTML", imgUrl: "./assets/icons/frontend_skills/HTML.png" },
    { name: "CSS", imgUrl: "./assets/icons/frontend_skills/CSS.png" },
    { name: "Git", imgUrl: "./assets/icons/frontend_skills/Git.png" },
    { name: "JavaScript", imgUrl: "./assets/icons/frontend_skills/Js.png" },
    { name: "REST-API", imgUrl: "./assets/icons/frontend_skills/Rest-Api.png" },
    { name: "Angular", imgUrl: "./assets/icons/frontend_skills/Angular.png" },
    { name: "TypeScript", imgUrl: "./assets/icons/frontend_skills/Ts.png" },
  ];

  pullToPeelImages = [
    './assets/stickers/skills/pull_to_peel/p2p_1.png',
    './assets/stickers/skills/pull_to_peel/p2p_2.png',
    './assets/stickers/skills/pull_to_peel/p2p_3.png',
  ];

  currentStickerIndex = 0;
  isPeeling = false;

  changeStickerImage() {
    if (this.isPeeling) return;

    if (this.currentStickerIndex === 0) {
      this.isPeeling = true;
      this.currentStickerIndex = 1;

      setTimeout(() => {
        this.currentStickerIndex = 2;
        this.isPeeling = false;
        this.cdr.detectChanges();
      }, 100);
    } else {
      this.currentStickerIndex = 0;
    }
  }
}
