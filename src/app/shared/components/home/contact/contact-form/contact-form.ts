import { Component, inject, Output, EventEmitter } from '@angular/core';
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

  @Output() mailSent = new EventEmitter<void>();

  submitted = false;

  userForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2)
      ],
      updateOn: 'blur'
    }),

    eMail: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email
      ],
      updateOn: 'blur'
    }),

    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200)
      ],
      updateOn: 'blur'
    }),

    privacyPolicy: new FormControl(false, {
      validators: [
        Validators.requiredTrue
      ]
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
          message
        })
      });

      const result: { success: boolean } = await response.json();

      if (response.ok && result.success) {
        this.formReset();
        this.mailSent.emit();
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

  get firstNameInvalid(): boolean {
    return !!this.firstName?.touched && !!this.firstName?.invalid;
  }

  get emailInvalid(): boolean {
    return !!this.email?.touched && !!this.email?.invalid;
  }

  get messageInvalid(): boolean {
    return !!this.message?.touched && !!this.message?.invalid;
  }

  get firstNameLabel(): string {
    if (!this.firstName?.touched) {
      return 'home.contact.nameQuestion';
    }

    if (this.firstName.hasError('required')) {
      return 'home.contact.nameError';
    }

    if (this.firstName.hasError('minlength')) {
      return 'home.contact.nameLengthError';
    }

    return 'home.contact.nameQuestion';
  }

  get emailLabel(): string {
    if (!this.email?.touched) {
      return 'home.contact.emailQuestion';
    }

    if (this.email.hasError('required')) {
      return 'home.contact.mailError';
    }

    if (this.email.hasError('email')) {
      return 'home.contact.mailEndingError';
    }

    return 'home.contact.emailQuestion';
  }

  get messageLabel(): string {
    if (!this.message?.touched) {
      return 'home.contact.messageQuestion';
    }

    if (this.message.hasError('required')) {
      return 'home.contact.messageError';
    }

    if (this.message.hasError('minlength')) {
      return 'home.contact.messageLengthError';
    }

    return 'home.contact.messageQuestion';
  }
}