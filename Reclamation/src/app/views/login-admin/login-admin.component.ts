import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  error = false;
  email = '';
  password = '';

  constructor(
    private servicioAdministrador: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.servicioAdministrador.login(this.email, this.password).subscribe(response => {
      if (response) {
        this.error = false;
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/admin']);
      }
      else {
        this.error = true;
      }
    });
  }
}
