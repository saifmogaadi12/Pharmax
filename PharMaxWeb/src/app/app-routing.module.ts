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
import {LoginAdminComponent} from "./views/login-admin/login-admin.component";
import {LandingAdminComponent} from "./views/landing-admin/landing-admin.component";
import {LandingUserComponent} from "./views/landing-user/landing-user.component";
import {AdminAuthGuard} from "./guard/admin-auth.guard";
import {ComplainlistAdminComponent} from "./views/complainlist-admin/complainlist-admin.component";
import {ComplainreportAdminComponent} from "./views/complainreport-admin/complainreport-admin.component";
import {LoginUserComponent} from "./views/login-user/login-user.component";
import {RegisterUserComponent} from "./views/register-user/register-user.component";
import {HomeUserComponent} from "./views/home-user/home-user.component";
import {AuthenticatorGuard} from "./guard/authenticator.guard";
import {RendezVousListComponent} from "./components/rendez-vous-list/rendez-vous-list.component";
import {RendezVousDetailsComponent} from "./components/rendez-vous-details/rendez-vous-details.component";
import {AddRendezVousComponent} from "./components/add-rendez-vous/add-rendez-vous.component";
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import {HttpClientModule} from "@angular/common/http";

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
  //{ path: 'admin', component: BoardAdminComponent },
  { path: 'errorpage', component: ErrorpageComponent },


  { path: '', component: LandingUserComponent },
  { path: 'admin-login', component: LoginAdminComponent },
  { path: 'admin', component: LandingAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'list', component: ComplainlistAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'report', component: ComplainreportAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'user-login', component: LoginUserComponent },
  { path: 'user-register', component: RegisterUserComponent },
  { path: 'user-home', component: HomeUserComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/rendezvous', component: RendezVousListComponent, canActivate: [AuthenticatorGuard] },
  { path: 'rendezvous/:id', component: RendezVousDetailsComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/add', component: AddRendezVousComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/rendezvous/add', component: AddRendezVousComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/add/rendezvous', component: RendezVousListComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/rendezvous/add/rendezvous', component: RendezVousListComponent, canActivate: [AuthenticatorGuard] },
  { path: 'user-home/add/rendezvous/add', component: AddRendezVousComponent, canActivate: [AuthenticatorGuard] },




  { path: '**', redirectTo: 'home', pathMatch: 'full' },


];
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter
  }
};
@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot(JWT_Module_Options),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}

