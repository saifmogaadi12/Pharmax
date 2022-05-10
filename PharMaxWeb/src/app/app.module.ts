import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { DetailsPatientComponent } from './components/details-patient/details-patient.component';
import { MaillerPatientComponent } from './components/mailer-patient/mailer-patient.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ListMedecinComponent } from './components/list-medecin/list-medecin.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ModComponent } from './components/mod/mod.component';
import { CertifComponent } from './components/certif/certif.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { BarChartModule, PieChartModule } from '@swimlane/ngx-charts';

registerLocaleData(en);

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
    UpdatePatientComponent,
    ListMedecinComponent,
    ModComponent,
    CertifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    SimpleNotificationsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzDropDownModule,
    NzFormModule,
    NzCardModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzAvatarModule,
    PieChartModule,
    BarChartModule,
  ],
  providers: [
    authInterceptorProviders,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
