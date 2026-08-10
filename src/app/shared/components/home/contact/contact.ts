import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';
import { TranslatePipe } from '@ngx-translate/core';
import { SuccessDialog } from './success-dialog/success-dialog';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, TranslatePipe, SuccessDialog],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  isDialogOpen = false;

  openDialog(): void {
    this.isDialogOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeDialog(): void {
    this.isDialogOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
