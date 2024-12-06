import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  bar:boolean=false;


  onSubmit(){
    this.bar=true;
  }
}
