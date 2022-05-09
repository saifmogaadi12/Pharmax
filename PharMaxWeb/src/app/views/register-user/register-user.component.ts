import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';
  // tslint:disable-next-line:no-inferrable-types
  surnames: string = '';
  // tslint:disable-next-line:no-inferrable-types
  route: string = '';
  // tslint:disable-next-line:no-inferrable-types
  email: string = '';
  // tslint:disable-next-line:no-inferrable-types variable-name
  phone_number: number;
  // tslint:disable-next-line:no-inferrable-types
  password: string = '';

  constructor(private service: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createUser() {
    const user: Users = {
      name: this.name,
      surnames: this.surnames,
      route: this.route,
      email: this.email,
      phone_number: this.phone_number,
      password: this.password
    };

    this.service.createUser(user).subscribe(ServerUser => {
      alert('User created with id' + ServerUser.id);
    });
    this.router.navigateByUrl('/user-login');
  }

  // tslint:disable-next-line:typedef
  validateFields() {
    const inputs = document.getElementsByTagName('input');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required')) {
        if (inputs[i].value === '') {
          alert('Fill in all fields');
          return false;
        }
      }
    }
    this.createUser();
    return true;
  }
}
