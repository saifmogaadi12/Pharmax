import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {APP_BASE_HREF, DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
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
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LoginAdminComponent} from "./views/login-admin/login-admin.component";
import {LandingAdminComponent} from "./views/landing-admin/landing-admin.component";
import {ComplainlistAdminComponent} from "./views/complainlist-admin/complainlist-admin.component";
import {ComplainreportAdminComponent} from "./views/complainreport-admin/complainreport-admin.component";
import {LoginUserComponent} from "./views/login-user/login-user.component";
import {RegisterUserComponent} from "./views/register-user/register-user.component";
import {LandingUserComponent} from "./views/landing-user/landing-user.component";
import {HomeUserComponent} from "./views/home-user/home-user.component";
import {TableComponent} from "./components/table/table.component";
import {TableSearchbarComponent} from "./components/table-searchbar/table-searchbar.component";
import {NavbarAdminComponent} from "./components/navbar-admin/navbar-admin.component";
import {NavbarUserComponent} from "./components/navbar-user/navbar-user.component";
import {CarouselComponent} from "./components/landing-carousel/carousel.component";
import {GraficoComponent} from "./components/grafico/grafico.component";
import {ModalComponent} from "./components/modal/modal.component";
import {ComplainAccordionComponent} from "./components/complain-accordion/complain-accordion.component";
import {CallbackPipe} from "./classes/callback.pipe";
import {SlaPieComponent} from "./components/sla-pie/sla-pie.component";
import {ComplainCardsComponent} from "./components/complain-cards/complain-cards.component";
import {TableAnswerModalComponent} from "./components/table-answer-modal/table-answer-modal.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {ConfirmDialogComponent} from "./components/shared/confirm-dialog/confirm-dialog.component";
import {AddRendezVousComponent} from "./components/add-rendez-vous/add-rendez-vous.component";
import {RendezVousDetailsComponent} from "./components/rendez-vous-details/rendez-vous-details.component";
import {RendezVousListComponent} from "./components/rendez-vous-list/rendez-vous-list.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ChartsModule} from "ng2-charts";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ScheduleModule} from "@syncfusion/ej2-angular-schedule";
import {ComboBoxModule, DropDownListModule, MultiSelectModule} from "@syncfusion/ej2-angular-dropdowns";
import {ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule} from "@syncfusion/ej2-angular-buttons";
import {SplitButtonModule} from "@syncfusion/ej2-angular-splitbuttons";
import {SidebarModule, TreeViewModule} from "@syncfusion/ej2-angular-navigations";
import {DatePickerModule, TimePickerModule} from "@syncfusion/ej2-angular-calendars";
import {MaskedTextBoxModule, TextBoxModule} from "@syncfusion/ej2-angular-inputs";
import {ListViewModule} from "@syncfusion/ej2-angular-lists";
import {ChartModule} from "@syncfusion/ej2-angular-charts";
import {GridModule} from "@syncfusion/ej2-angular-grids";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {ToastModule} from "@syncfusion/ej2-angular-notifications";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
//import {MatCardModule} from '@angular/material/card';
//import {MatDialog, MatDialogModule} from '@angular/material/dialog';

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
    NavbarComponent,
    LoginAdminComponent,
    LandingAdminComponent,
    ComplainlistAdminComponent,
    ComplainreportAdminComponent,
    LoginUserComponent,
    RegisterUserComponent,
    HomeUserComponent,
    TableComponent,
    TableSearchbarComponent,
    LandingUserComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    CarouselComponent,
    GraficoComponent,
    ModalComponent,
    ComplainAccordionComponent,
    CallbackPipe,
    SlaPieComponent,
    ComplainCardsComponent,
    TableAnswerModalComponent,
    EditUserComponent,
    ConfirmDialogComponent,
    AddRendezVousComponent,
    RendezVousDetailsComponent,
    RendezVousListComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    SimpleNotificationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    NgbModule,
    MatCardModule,
    MatDialogModule,
    ScheduleModule,
    DropDownListModule,
    MultiSelectModule,
    ComboBoxModule,
    CheckBoxModule,
    ButtonModule,
    SwitchModule,
    SplitButtonModule,
    RadioButtonModule,
    TreeViewModule,
    DatePickerModule,
    TimePickerModule,
    TextBoxModule,
    MaskedTextBoxModule,
    ListViewModule,
    SidebarModule,
    ChartModule,
    GridModule,
    DialogModule,
    ToastModule,
    MatIconModule
  ],
  providers: [ComplainAccordionComponent, HomeUserComponent , DatePipe,CalendarComponent,ComplainreportAdminComponent,authInterceptorProviders,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
