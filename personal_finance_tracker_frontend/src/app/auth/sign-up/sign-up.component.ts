import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      username: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl<string>('', [
        Validators.required,
        this.confirmPasswordValidator.bind(this),
      ]),
    }, { validators: this.passwordsMatchValidator });
  }

  confirmPasswordValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!this.signUpForm) {
      return null;
    }
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = control.value;

    if (confirmPassword && password && confirmPassword !== password.substring(0, confirmPassword.length)) {
      return { mismatch: true };
    }
    return null;
  }

   passwordsMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    if (!(control instanceof FormGroup)) {
      return null;
    }
    
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password && confirmPassword && password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  };

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
      // Handle form submission logic here
    }
  }

  onCancel() {
    this.signUpForm.reset();
  }
}
