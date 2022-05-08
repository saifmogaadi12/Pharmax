import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { MaillerPatientComponent } from './components/mailer-patient/mailer-patient.component';
import { DetailsPatientComponent } from './components/details-patient/details-patient.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';

const routes: Routes = [
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'patientItem', component: PatientItemComponent },
  { path: 'listPatient', component: ListPatientsComponent },
  { path: 'deletePatient', component: DeletePatientComponent },
  { path: 'updatePatient', component: UpdatePatientComponent },
  { path: 'maillerPatient', component: MaillerPatientComponent },
  { path: 'detailsPatient', component: DetailsPatientComponent },
  { path: 'searchPatient', component: SearchPatientComponent },
  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'errorpage', component: ErrorpageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }