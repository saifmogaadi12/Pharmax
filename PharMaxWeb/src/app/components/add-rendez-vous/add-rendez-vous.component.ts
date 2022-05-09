import { Component, OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous.model';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-rendez-vous',
  templateUrl: './add-rendez-vous.component.html',
  styleUrls: ['./add-rendez-vous.component.css']
})
export class AddRendezVousComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  rendezvous: RendezVous = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private rendezvousService: RendezVousService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
      else 
        window.location.assign("errorpage");
  }

  saveRendezVous(): void {
    const data = {
      title: this.rendezvous.title,
      description: this.rendezvous.description
    };

    this.rendezvousService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRendezVous(): void {
    this.submitted = false;
    this.rendezvous = {
      title: '',
      description: '',
      published: false
    };
  }

}
