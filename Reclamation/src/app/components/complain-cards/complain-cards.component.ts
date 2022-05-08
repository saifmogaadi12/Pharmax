import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/classes/claim';
import { ClaimService } from 'src/app/services/ClaimService';

@Component({
  selector: 'app-complain-cards',
  templateUrl: './complain-cards.component.html',
  styleUrls: ['./complain-cards.component.css']
})
export class ComplainCardsComponent implements OnInit {

  claims: Claim[] = [];
  claimsProgress: Claim[] = [];
  claimsFinished: Claim[] = [];
  claimsError: Claim[] = [];

  constructor(private services: ClaimService) { }

  ngOnInit(): void {
    this.loadClaims();
  }

  // tslint:disable-next-line:typedef
  loadClaims() {
    this.services.loadClaims().subscribe(ClaimsService => {
      this.claims = ClaimsService;
      for (const a of this.claims) {
        if (a.status == 'In Progress') { this.claimsProgress.push(a); }
        else if (a.status == 'Done') { this.claimsFinished.push(a); }
        else if (a.status == 'Error') { this.claimsError.push(a); }
      }
    });
  }

}
