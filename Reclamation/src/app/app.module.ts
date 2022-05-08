import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAdminComponent } from './views/login-admin/login-admin.component';
import { LandingAdminComponent } from './views/landing-admin/landing-admin.component';
import { ComplainlistAdminComponent } from './views/complainlist-admin/complainlist-admin.component';
import { ComplainreportAdminComponent } from './views/complainreport-admin/complainreport-admin.component';
import { LoginUserComponent } from './views/login-user/login-user.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { HomeUserComponent } from './views/home-user/home-user.component';
import { TableComponent } from './components/table/table.component';
import { TableSearchbarComponent } from './components/table-searchbar/table-searchbar.component';
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { CarouselComponent } from './components/landing-carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ComplainAccordionComponent } from './components/complain-accordion/complain-accordion.component';
import { CallbackPipe } from './classes/callback.pipe';
import { SlaPieComponent } from './components/sla-pie/sla-pie.component';
import { ComplainCardsComponent } from './components/complain-cards/complain-cards.component';
import { TableAnswerModalComponent } from './components/table-answer-modal/table-answer-modal.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from './components/shared/confirm-dialog/confirm-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF, DatePipe, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AddRendezVousComponent} from "./components/add-rendez-vous/add-rendez-vous.component";
import {RendezVousDetailsComponent} from "./components/rendez-vous-details/rendez-vous-details.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {RendezVousListComponent} from "./components/rendez-vous-list/rendez-vous-list.component";
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

@NgModule({
  declarations: [
    AppComponent,
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
  entryComponents: [ConfirmDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
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
    ToastModule
  ],
  providers: [ComplainAccordionComponent, HomeUserComponent , DatePipe,CalendarComponent,ComplainreportAdminComponent,{ provide: APP_BASE_HREF, useValue: '/' }, Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
