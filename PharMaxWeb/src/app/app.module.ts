import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRendezVousComponent } from './components/add-rendez-vous/add-rendez-vous.component';
import { RendezVousDetailsComponent } from './components/rendez-vous-details/rendez-vous-details.component';
import { RendezVousListComponent } from './components/rendez-vous-list/rendez-vous-list.component';

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddRendezVousComponent,
    RendezVousDetailsComponent,
    RendezVousListComponent,
    AppComponent,
    CalendarComponent
  ],
  imports: [
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
  providers: [CalendarComponent, { provide: APP_BASE_HREF, useValue: '/' }, Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
