import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  private cdr = inject(ChangeDetectorRef)

  frontendSkills = [
    { name: "HTML", imgUrl: "./assets/icons/frontend_skills/HTML.svg" },
    { name: "CSS", imgUrl: "./assets/icons/frontend_skills/CSS.svg" },
    { name: "Git", imgUrl: "./assets/icons/frontend_skills/Git.svg" },
    { name: "JavaScript", imgUrl: "./assets/icons/frontend_skills/Js.svg" },
    { name: "REST-API", imgUrl: "./assets/icons/frontend_skills/Rest-Api.svg" },
    { name: "Angular", imgUrl: "./assets/icons/frontend_skills/Angular.svg" },
    { name: "TypeScript", imgUrl: "./assets/icons/frontend_skills/Ts.svg" },
  ];

  pullToPeelImages = [
    './assets/stickers/skills/pull_to_peel/p2p_1.svg',
    './assets/stickers/skills/pull_to_peel/p2p_2.svg',
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
      }, 150);
    } else {
      this.currentStickerIndex = 0;
    }
  }
}
