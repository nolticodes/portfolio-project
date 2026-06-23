import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const eMailValue = control.value;
    const hasValidEnding = eMailValue.endsWith('.com') || eMailValue.endsWith('.de');
    return !hasValidEnding ? {invalidEmailEnding: {value: eMailValue}} : null;
  };
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

  userForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)]
    }),
    eMail: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
  })

  formSubmit() {
    console.log(this.userForm.value)
  }

  formReset() {
    this.userForm.reset
  }

  get email() {
    return this.userForm.get("eMail")
  }

}
