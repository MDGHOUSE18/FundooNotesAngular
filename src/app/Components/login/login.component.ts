import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  bar: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private fromBuilder: FormBuilder,
    private user: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
    });
  }
  onSubmit() {
    this.bar = true;
    this.submitted = true;
    if (this.loginForm.valid) {
      let reqDate = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      this.user.login(reqDate).subscribe(
        (response: any) => {
          // alert('login successfull');
          // console.log(response);
          this._snackBar.open('login successful...', 'Close', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['snackbar-success'], // Optional styling
          });
          localStorage.setItem('token', response.data);
          sessionStorage.setItem('token', response.data);
          this.router.navigate(['/dashboard/notes']);
          this.bar = false;
        },
        (error) => {
          this.bar = false;
          // alert('Login failed. Please try again.');
          this._snackBar.open('Login failed. Please try again.', 'Close', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['snackbar-success'], // Optional styling
          });
          console.error(error.message);
        }
      );
    }
  }
}
