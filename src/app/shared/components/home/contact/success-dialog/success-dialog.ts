import {
  Component,
  EventEmitter,
  Output, inject
} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-success-dialog',
  imports: [TranslatePipe],
  templateUrl: './success-dialog.html',
  styleUrl: './success-dialog.scss',
})
export class SuccessDialog {
  private translate = inject(TranslateService);

  @Output() close = new EventEmitter<void>();

  closeDialog(): void {
    this.close.emit();
  }
}
