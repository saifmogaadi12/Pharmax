import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  captcha!:string;

  isSuccessful = false;
  isSignUpFailed = false;
  connectionFailed= true;
  errorMessage = '';
  constructor(private authService: AuthService,private router: Router) { 
  }
  ngOnInit(): void {
   // this.authService.testConn(this.connectionFailed).then
  }

  resolved(captchaResponse: string){
     this.captcha = captchaResponse;
     console.log(this.captcha)
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    if(this.authService.testConn())
       window.location.assign('/errorpage');

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    );
    if(!this.isSignUpFailed ) 
      window.location.assign('/login');
  }
}