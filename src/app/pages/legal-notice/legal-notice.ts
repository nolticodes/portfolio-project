import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LegalComponent } from '../../shared/components/legal-component/legal-component';


@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe, LegalComponent],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
