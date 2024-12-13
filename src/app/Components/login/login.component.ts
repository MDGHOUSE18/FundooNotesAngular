import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      username: [''],
      password: [''],
    });
  }
  onSubmit() {
    this.bar = true;
    this.submitted = true;
    if (this.loginForm.valid) {
      let reqDate = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.user.login(reqDate).subscribe(
        (response: any) => {
          alert('login successfull');
          // console.log(response);

          localStorage.setItem('token',response.data);
          sessionStorage.setItem('token',response.data);
          this.router.navigate(['/dashboard/notes']);
          this.bar = false;
        },
        (error) => {
          this.bar = false;
          alert('Login failed. Please try again.');
          console.error(error.message);
        }
      );
    }
  }
}
