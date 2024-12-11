import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit{
  bar : boolean =false;
  forgotPasswordForm!:FormGroup;
  submitted = false;

  constructor(
    private formBuilder:FormBuilder,
    private user:UserService,
    private router:Router
  ){}

  ngOnInit():void{
    this.forgotPasswordForm = this.formBuilder.group({
      Email:['']
    })
  }
  onSubmit(){
    this.bar=true;
    this.submitted=true;
    // console.log('email receiving'+this.forgotPasswordForm.value.Email)
    if (this.forgotPasswordForm.valid) {
      let reqDate = {
        
        Email:this.forgotPasswordForm.value.Email
        
      };
      this.user.forgotPassword(reqDate).subscribe(
        (response:any) => {
          alert(response.message);
          this.bar=false;
          // console.log(response)
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          this.bar=false;
        }
      )
    }
  }
}
