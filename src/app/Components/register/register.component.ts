import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  bar: boolean = false;

  registerForm!: FormGroup;
  submitted = false;
  constructor(
    private fromBuilder: FormBuilder,
    private user: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });
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
      }
      this.user.register(reqDate).subscribe(
        (response: any) => {
          alert('registeration successfull');
          console.log(response);
        },
        (error) => {
          alert('Registration failed. Please try again.');
          console.error(error.message);
        }
      );
    }
  }
}
