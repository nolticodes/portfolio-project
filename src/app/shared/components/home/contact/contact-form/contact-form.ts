import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";


export function forbiddenEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const eMailValue = control.value;

    if (!eMailValue) {
      return null;
    }

    const hasValidEnding = eMailValue.endsWith('.com') || eMailValue.endsWith('.de');
    return !hasValidEnding ? { invalidEmailEnding: { forbiddenEmail: eMailValue } } : null;
  };
}

export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == "Your name goes here" ? { forbiddenEmail: { value: control.value } } : null;
  };
}

export function forbiddenEmailValidatorTwo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == "youremail@email.com" ? { forbiddenName: { value: control.value } } : null;
  };
}

export function forbiddenMessageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == "Hello Denis, I am interested in ..." ? { forbiddenMessage: { value: control.value } } : null;
  };
}


@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private translate = inject(TranslateService);

  submitted = false;

  userForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), forbiddenNameValidator()]
    }),
    eMail: new FormControl('', {
      validators: [Validators.required, Validators.email, forbiddenEmailValidator(), forbiddenEmailValidatorTwo()]
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(200), forbiddenMessageValidator()]
    }),
    privacyPolicy: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  });

  async formSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const { firstName, eMail, message } = this.userForm.getRawValue();

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: firstName,
          email: eMail,
          message: message
        })
      });

      const result: { success: boolean } = await response.json();

      if (response.ok && result.success) {
        console.log('Nachricht wurde erfolgreich versendet.');
        this.formReset();
      } else {
        console.error('Die Nachricht konnte nicht versendet werden.');
      }
    } catch (error) {
      console.error('Netzwerkfehler beim Versenden:', error);
    }
  }

  formReset() {
    this.submitted = false;

    this.userForm.reset({
      firstName: '',
      eMail: '',
      message: '',
      privacyPolicy: false
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get email() {
    return this.userForm.get('eMail');
  }

  get message() {
    return this.userForm.get('message');
  }

  get firstNameRequired() {
    return !!this.firstName?.touched && !!this.firstName?.hasError('required');
  }

  get emailRequired() {
    return !!this.email?.touched && !!this.email?.hasError('required');
  }

  get messageRequired() {
    return !!this.message?.touched && !!this.message?.hasError('required');
  }
}