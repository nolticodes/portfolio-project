import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-policy-component',
  imports: [TranslatePipe],
  templateUrl: './policy-component.html',
  styleUrl: './policy-component.scss',
})
export class PolicyComponent {}
