import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  bar: boolean = false;

  registerForm!: FormGroup;
  submitted = false;
  constructor(
    private fromBuilder: FormBuilder,
    private user: UserService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required], // confirmPassword is defined
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  
  onSubmit() {
    this.bar = true;
    this.submitted = true;
    if (this.registerForm.valid) {
      let reqDate = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.user.register(reqDate).subscribe(
        (response: any) => {
          // alert('registeration successfull');
          // console.log(response);
          this._snackBar.open('Registration successful...', 'Close', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['snackbar-success'], // Optional styling
          });
        },
        (error) => {
          // alert('Registration failed. Please try again.');
          console.error(error.message);
          this._snackBar.open(
            'Registration failed. Please try again.',
            'Close',
            {
              duration: 3000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              panelClass: ['snackbar-error'], // Optional styling
            }
          );
        }
      );
    }
  }
}
