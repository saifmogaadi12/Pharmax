import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from 'src/app/classes/claim';
import { Users } from 'src/app/classes/user';
import { ClaimService } from 'src/app/services/ClaimService';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
  providers: [DatePipe]
})
export class HomeUserComponent implements OnInit {

  name = '';
  surnames = '';
  route = '';
  email = '';
  // tslint:disable-next-line:variable-name
  phone_number = 0;
  password = '';

  isReadOnly = true;
  users: Users[] = [];
  claims: Claim[] = [];

  user: Users = {
    id: 0,
    name: '',
    surnames: '',
    route: '',
    email: '',
    phone_number: 0,
    password: ''
  };

  // Fields to be able to add a new claim
  routeUserClaim: string;
  ClaimUserName: string;
  surnameUserClaim: string;
  ClaimSubject: string;
  claimText: string;
  dateUserClaim: string;
  ClaimUserStatus: string;
  responses: string[];

  myDate: Date = new Date();
  stringDate: string;

  // tslint:disable-next-line:typedef
  constructor(
    private service: UserService,
    private service2: ClaimService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.stringDate = this.myDate.getDate() + '/' + (this.myDate.getMonth() + 1) + '/' + this.myDate.getFullYear();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id;
      id = localStorage.getItem('id');
      this.loadUser(id);
    });
  }

  // tslint:disable-next-line:typedef
  addClaim() {
    const newClaim: Claim = {
      route: this.routeUserClaim,
      name: this.ClaimUserName,
      surname: this.surnameUserClaim,
      subject: this.ClaimSubject,
      claimText: this.claimText,
      date: this.stringDate,
      status: 'In Progress',
      responses: ['En Cours...'],
    };

    console.log(newClaim.responses);
    this.service2.addUserClaim(newClaim).subscribe(
      claimService => {
        alert('Your claim has been submitted.');
        this.loadClaims(this.routeUserClaim);
      }
    );
    this.clearFields();
  }


  // tslint:disable-next-line:typedef
  editClaim() {
    // @ts-ignore
    const newClaim: Claim = {
      route: this.routeUserClaim,
      name: this.ClaimUserName,
      surname: this.surnameUserClaim,
      subject: this.ClaimSubject,
      claimText: this.claimText,
      date: this.stringDate,
      status: 'In Progress',
      responses: []
    };

    this.service2.editClaim('626af43187b3ded3fae804bb', newClaim).subscribe(
      claimService => {
        alert('Your claim has been submitted.');
        this.loadClaims(this.routeUserClaim);
      }
    );
    this.clearFields();
  }


  // tslint:disable-next-line:typedef
  clearFields() {
    this.ClaimSubject = '';
    this.claimText = '';
  }


  loadUsers() {
    this.service.getUsers().subscribe(ServerUsers => {
      this.users = ServerUsers;
    });
  }

  // tslint:disable-next-line:typedef
  loadUser(id: number) {
    this.service.getUser(id).subscribe(ServerUsers => {
      this.user = ServerUsers;
      const rutSearched = this.user.route;
      this.routeUserClaim = this.user.route;
      this.ClaimUserName = this.user.name;
      this.surnameUserClaim = this.user.surnames;
      this.loadClaims(rutSearched);
    });
  }

  // tslint:disable-next-line:typedef
  loadClaims(route: string) {
    this.service2.loadClaimsOfAUser(route).subscribe(ServerClaims => {
      this.claims = ServerClaims;
    });
  }

  // tslint:disable-next-line:typedef
  editData() {
    const names = document.getElementById('input-names') as HTMLInputElement;
    const surnames = document.getElementById('input-surnames') as HTMLInputElement;
    const phone = document.getElementById('input-phone') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    names.disabled = false;
    surnames.disabled = false;
    phone.disabled = false;
    email.disabled = false;
    const submitButton = document.getElementById('send') as HTMLButtonElement;
    submitButton.style.display = 'inLine';
    const passwordt = document.getElementById('input-passwordt') as HTMLInputElement;
    passwordt.style.display = 'inline';
    const password = document.getElementById('input-password') as HTMLInputElement;
    password.style.display = 'inline';
    const editButton = document.getElementById('edit') as HTMLButtonElement;
    editButton.style.display = 'none';
    const cancelButton = document.getElementById('cancel') as HTMLButtonElement;
    cancelButton.style.display = 'inline';
  }

// tslint:disable-next-line:typedef
  data() {
    const user: Users = {
      id: this.user.id,
      name: this.name,
      surnames: this.surnames,
      route: this.routeUserClaim,
      email: this.email,
      phone_number: this.phone_number,
      password: this.password
    };

    this.service.editUser(user).subscribe(ServerUser => {
      alert('User Edited');
      document.defaultView.location.reload();
    });
  }

  // tslint:disable-next-line:typedef
  cancelEdit(){
    const names = document.getElementById('input-names') as HTMLInputElement;
    const surnames = document.getElementById('input-surnames') as HTMLInputElement;
    const phone = document.getElementById('input-phone') as HTMLInputElement;
    const email = document.getElementById('input-email') as HTMLInputElement;
    const route = document.getElementById('input-route') as HTMLInputElement;
    route.disabled = true;
    names.disabled = true;
    surnames.disabled = true;
    phone.disabled = true;
    email.disabled = true;
    const editButton = document.getElementById('edit') as HTMLButtonElement;
    editButton.style.display = 'inline';
    const submitButton = document.getElementById('send') as HTMLButtonElement;
    submitButton.style.display = 'none';
    route.style.display = 'inLine';
    const cancelButton = document.getElementById('cancel') as HTMLButtonElement;
    cancelButton.style.display = 'none';
    const passwordt = document.getElementById('input-passwordt') as HTMLInputElement;
    passwordt.style.display = 'none';
    const password = document.getElementById('input-password') as HTMLInputElement;
    password.style.display = 'none';
  }

  // tslint:disable-next-line:typedef
  validateUserFields() {
    // tslint:disable-next-line:prefer-const
    const inputs = document.getElementsByTagName('input');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required')) {
        if (inputs[i].value == '') {
          alert('done');
          return false;
        }
      }
    }
    this.data();
    return true;
  }
}
