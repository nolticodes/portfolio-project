import { Component, signal } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { TranslatePipe } from '@ngx-translate/core';
import { SuccessDialog } from './success-dialog/success-dialog';

@Component({
  selector: 'app-contact',
  imports: [
    ContactForm,
    TranslatePipe,
    SuccessDialog,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly isDialogOpen = signal(false);

  /** Opens the success dialog and disables page scrolling. */
  openDialog(): void {
    this.isDialogOpen.set(true);
    document.body.classList.add('no-scroll');
  }

  /** Closes the success dialog and restores page scrolling. */
  closeDialog(): void {
    this.isDialogOpen.set(false);
    document.body.classList.remove('no-scroll');
  }
}