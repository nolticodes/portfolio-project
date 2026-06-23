import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


export function forbiddenEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const eMailValue = control.value;
    const hasValidEnding = eMailValue.endsWith('.com') || eMailValue.endsWith('.de');
    return !hasValidEnding ? { invalidEmailEnding: { forbiddenEmail: eMailValue } } : null;
  };
}

export function forbiddenEmailValidatorTwo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == "Your name goes here" ? { forbiddenEmail: { value: control.value } } : null;
  };
}

export function forbiddenNameValidator(): ValidatorFn {
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
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

  private translate = inject(TranslateService);

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
  })

  formSubmit() {
    console.log(this.userForm.value)
  }

  formReset() {
    this.userForm.reset({
      firstName: '',
      eMail: '',
      message: '',
      privacyPolicy: false
    });
  }

  get email() {
    return this.userForm.get("eMail")
  }

}
