import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  error = false;
  email = '';
  password = '';

  constructor(
    private servicioUsuario: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.servicioUsuario.login(this.email, this.password).subscribe(response => {
      if (response) {
        this.error = false;
        const token = response.token;
        localStorage.setItem('token', token);
        const id = response.id;
        localStorage.setItem('id', id);
        this.router.navigate(['/user-home']);
      }
      else {
        this.error = true;
      }
    });
  }
}
