import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-component.html',
  styleUrl: './legal-component.scss',
})
export class LegalComponent {}
