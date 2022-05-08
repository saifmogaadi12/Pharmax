import { Component, Input, OnInit } from '@angular/core';
import { Claim } from 'src/app/classes/claim';
import { ClaimService } from 'src/app/services/ClaimService';

@Component({
  selector: 'app-table-answer-modal',
  templateUrl: './table-answer-modal.component.html',
  styleUrls: ['./table-answer-modal.component.css']
})
export class TableAnswerModalComponent implements OnInit {


  id: number;
  @Input() claims: Claim[] = [];
  route = '';
  name = '';
  surname = '';
  subject = '';
  claimText = '';
  date = '';
  status = '';
  response: string[] = [];

  constructor( private services: ClaimService ) { }

  ngOnInit(): void {
  }

  submitButton(id: number){
    this.services.getClaim(id).subscribe(claim => {
      this.sendResponse(claim, id);
    });
  }

  sendResponse(claim: Claim , id: number) {
    this.response = claim.responses;
    const newAnswer = document.getElementById('answer-textarea') as HTMLTextAreaElement;
    this.response.push(newAnswer.value);
    console.log(this.response);
    const claimWithResponse: Claim = {
      id: claim.id,
      route: claim.route,
      name: claim.name,
      surname: claim.surname,
      subject: claim.subject,
      claimText: claim.claimText,
      date: claim.date,
      status: claim.status,
      responses: this.response
    };
    console.log(claimWithResponse);
    this.services.editClaim(id, claimWithResponse).subscribe(ClaimServer => {
      alert('Claim Edited');
      document.defaultView.location.reload();
    });
  }


}
