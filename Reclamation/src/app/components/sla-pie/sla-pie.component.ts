import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Claim } from 'src/app/classes/claim';
import { ClaimService } from 'src/app/services/ClaimService';

@Component({
  selector: 'app-sla-pie',
  templateUrl: './sla-pie.component.html',
  styleUrls: ['./sla-pie.component.css']
})
export class SlaPieComponent implements OnInit {

  constructor(private services: ClaimService) { }

  claims: Claim[] = [];
  public numeroError: number = 0;
  public numeroOK: number = 0;

  public pieChartLabels: Label[] = ['Late', 'OK'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: SingleDataSet = [1, 1];
  public charColors;

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
        if (a.status === 'Error') { this.numeroError++; }
        else { this.numeroOK++; }
        this.pieChartData = [this.numeroError, this.numeroOK];
      }
    });
  }
}
