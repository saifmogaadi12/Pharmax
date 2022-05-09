import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Claim } from 'src/app/classes/claim';
import { ClaimService } from 'src/app/services/ClaimService';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {


  constructor(private services: ClaimService) { }

  claims: Claim[] = [];
  public errorNumber = 0;
  public numberinProgress = 0;
  public finishedNumber = 0;

  public pieChartLabels: Label[] = ['Error', 'In Progress', 'Done'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: SingleDataSet = [1, 1, 1];
  public pieCharColors :any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  ngOnInit(): void {
    this.loadClaims();
  }

  // tslint:disable-next-line:typedef
  loadClaims() {
    this.services.loadClaims().subscribe(ClaimsServices => {
      this.claims = ClaimsServices;
      for (const a of this.claims) {
        if (a.status == 'Done') { this.finishedNumber++; }
        else if (a.status == 'In Progress') { this.numberinProgress++; }
        else if (a.status == 'Error') { this.errorNumber++; }
        this.pieChartData = [this.errorNumber, this.numberinProgress, this.finishedNumber];
      }
    });
  }
}
