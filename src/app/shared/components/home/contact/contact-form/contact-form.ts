import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

/** Validates whether an email address ends with ".com" or ".de". */
export function forbiddenEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailValue = control.value;

    if (!emailValue) {
      return null;
    }

    const hasValidEnding =
      emailValue.endsWith('.com') ||
      emailValue.endsWith('.de');

    return !hasValidEnding
      ? { invalidEmailEnding: { forbiddenEmail: emailValue } }
      : null;
  };
}

/** Prevents the name field from containing its default placeholder text. */
export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'Your name goes here'
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}

/** Prevents the email field from containing its default placeholder text. */
export function forbiddenEmailValidatorTwo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'youremail@email.com'
      ? { forbiddenEmail: { value: control.value } }
      : null;
  };
}

/** Prevents the message field from containing its default placeholder text. */
export function forbiddenMessageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'Hello Denis, I am interested in ...'
      ? { forbiddenMessage: { value: control.value } }
      : null;
  };
}

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  @Output() mailSent = new EventEmitter<void>();

  submitted = false;

  userForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
      ],
      updateOn: 'blur',
    }),

    eMail: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
      ],
      updateOn: 'blur',
    }),

    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200),
      ],
      updateOn: 'blur',
    }),

    privacyPolicy: new FormControl(false, {
      validators: [
        Validators.requiredTrue,
      ],
    }),
  });

  /** Validates the form, sends its data to the server and emits an event after a successful request. */
  async formSubmit(): Promise<void> {
    this.submitted = true;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const {
      firstName,
      eMail,
      message,
    } = this.userForm.getRawValue();

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: firstName,
          email: eMail,
          message,
        }),
      });

      const result: { success: boolean } = await response.json();

      if (response.ok && result.success) {
        this.formReset();
        this.mailSent.emit();
      } else {
        console.error(
          'Die Nachricht konnte nicht versendet werden.'
        );
      }
    } catch (error) {
      console.error(
        'Netzwerkfehler beim Versenden:',
        error
      );
    }
  }

  /** Resets all form fields and restores the initial submission state. */
  formReset(): void {
    this.submitted = false;

    this.userForm.reset({
      firstName: '',
      eMail: '',
      message: '',
      privacyPolicy: false,
    });
  }

  /** Returns the form control for the first name field. */
  get firstName() {
    return this.userForm.get('firstName');
  }

  /** Returns the form control for the email field. */
  get email() {
    return this.userForm.get('eMail');
  }

  /** Returns the form control for the message field. */
  get message() {
    return this.userForm.get('message');
  }

  /** Checks whether the touched first name field is invalid. */
  get firstNameInvalid(): boolean {
    return !!this.firstName?.touched &&
      !!this.firstName?.invalid;
  }

  /** Checks whether the touched email field is invalid. */
  get emailInvalid(): boolean {
    return !!this.email?.touched &&
      !!this.email?.invalid;
  }

  /** Checks whether the touched message field is invalid. */
  get messageInvalid(): boolean {
    return !!this.message?.touched &&
      !!this.message?.invalid;
  }

  /** Returns the appropriate translation key for the first name label. */
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

  /** Returns the appropriate translation key for the email label. */
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

  /** Returns the appropriate translation key for the message label. */
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