import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PolicyComponent } from "../../shared/components/policy-component/policy-component";

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslatePipe, PolicyComponent],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}
