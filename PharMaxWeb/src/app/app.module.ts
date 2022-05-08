import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { ErrorpageComponent } from './errorpage/errorpage.component';





import { RecaptchaModule } from 'ng-recaptcha';






import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { DetailsPatientComponent } from './components/details-patient/details-patient.component';
import { MaillerPatientComponent } from './components/mailer-patient/mailer-patient.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ErrorpageComponent,
    AddPatientComponent,
    DeletePatientComponent,
    DetailsPatientComponent,
    MaillerPatientComponent,
    ListPatientsComponent,
    PatientItemComponent,
    SearchPatientComponent,
    UpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    SimpleNotificationsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
