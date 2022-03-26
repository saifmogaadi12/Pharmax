import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})

export class AppComponent implements OnInit {

  title = 'PharMaxWeb';
  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  public selectedDate: Date | undefined;
  ngOnInit(): void {
    this.selectedDate = new Date(2018, 1, 14);
  }
}
