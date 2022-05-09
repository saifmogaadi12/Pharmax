import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  listPatients!: Patient[];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private patientService: PatientService,private tokenStorageService: TokenStorageService) { 
   // window.location.reload();
  }


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
    this.patientService.getPatients().subscribe(
      (data: Patient[]) => 
        this.listPatients=data);
 
      }

  
}
