import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/classes/claim';
import { PdfserviceService } from 'src/app/services/pdfservice.service';
import { ClaimService } from 'src/app/services/ClaimService';
import {ComplainAccordionComponent} from '../complain-accordion/complain-accordion.component';
import {ComplainreportAdminComponent} from '../../views/complainreport-admin/complainreport-admin.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(private services: ClaimService, private pdfservices: PdfserviceService, private comp: ComplainreportAdminComponent ) { }
  private currentIndex: number;
  Claim?: ArrayBuffer;
  currentClaim: Claim = {
    claimText: '',
    date: '',
    name: '',
    responses: [],
    route: '',
    status: '',
    subject: '',
    surname: ''
  };
  id = 0;
  route = '';
  name = '';
  surname = '';
  subject = '';
  claimText = '';
  date = '';
  status = '';
  open = 0;
  claims: any = [];
  // tslint:disable-next-line:variable-name
  first_click = true;
  // tslint:disable-next-line:ban-types
  selected: number ;

  // tslint:disable-next-line:typedef
   ring;

  ngOnInit(): void { this.loadClaims(); }

  // tslint:disable-next-line:typedef
  loadClaims() { this.services.loadClaims().subscribe(ClaimsServices => { this.claims = ClaimsServices; }); }

  // tslint:disable-next-line:typedef
  downloadPDF(claimIn: Claim) { this.pdfservices.downloadPDF(claimIn); }

  // tslint:disable-next-line:typedef
  showPDF(claimIn: Claim) { this.pdfservices.showPDF(claimIn); }

  async loadReclaimsAsc() { this.claims = await this.services.loadClaims().toPromise(); }

  showEdition(claimM: Claim){
    if (this.open == 0) { this.open = claimM.id; }
    else{
      // tslint:disable-next-line:variable-name
      const text_old = document.getElementById('text_' + this.open)as HTMLElement;
      // tslint:disable-next-line:variable-name
      const display_old = document.getElementById('show_' + this.open)as HTMLElement;
      // tslint:disable-next-line:variable-name
      const change_old = document.getElementById('change_' + this.open)as HTMLElement;
      // tslint:disable-next-line:variable-name
      const cancel_old = document.getElementById('cancel_' + this.open)as HTMLElement;
      // tslint:disable-next-line:variable-name
      const label_old = document.getElementById('label_' + this.open)as HTMLElement;
      text_old.style.display = 'none';
      display_old.style.display = 'inline';
      change_old.style.display = 'none';
      cancel_old.style.display = 'none';
      label_old.style.display = 'inline';
    }
    this.status = claimM.status;
    const text = document.getElementById('text_' + claimM.id)as HTMLElement;
    const display = document.getElementById('display_' + claimM.id)as HTMLElement;
    const change = document.getElementById('change_' + claimM.id)as HTMLElement;
    const cancel = document.getElementById('cancel_' + claimM.id)as HTMLElement;
    const label = document.getElementById('label_' + this.open)as HTMLElement;
    text.style.display = 'inline';
    display.style.display = 'none';
    change.style.display = 'inline';
    cancel.style.display = 'inline';
    label.style.display = 'none';
    this.open = claimM.id;
  }

  cancelEdition(claimM: Claim){
    const text = document.getElementById('text_' + this.open)as HTMLElement;
    const display = document.getElementById('display_' + this.open)as HTMLElement;
    const change = document.getElementById('change_' + this.open)as HTMLElement;
    const cancel = document.getElementById('cancel_' + this.open)as HTMLElement;
    const label = document.getElementById('label_' + this.open)as HTMLElement;
    text.style.display = 'none';
    display.style.display = 'inline';
    change.style.display = 'none';
    cancel.style.display = 'none';
    label.style.display = 'inline';
    this.open = 0;
  }

  // tslint:disable-next-line:typedef
  sendStatus(claimIn: Claim, id: number) {
    this.status = (document.getElementById('text_' + claimIn.id) as HTMLInputElement).value;
    const claimE: Claim = {
      id: claimIn.id,
      route: claimIn.route,
      name: claimIn.name,
      surname: claimIn.surname,
      subject: claimIn.subject,
      claimText: claimIn.claimText,
      date: claimIn.date,
      status: this.status,
      responses: claimIn.responses
    };
    this.services.editClaim(id, claimE).subscribe(ClaimServer => {
      alert('Claim Edited');
      document.defaultView.location.reload();
    });
  }
  setClaim(id: number){
    if (this.first_click === true) {
      localStorage.setItem('idClaim', id.toString());
      this.first_click = false;
    }
    else { this.first_click = true; }
  }

  buttonSubmit(claimIn: Claim){
  }


  onKey($event: any, sel: any): void {
    const name = (event.target as HTMLInputElement).value;
    console.log(sel + 'me');
    this.currentClaim = {
      claimText: '',
      date: '',
      name: '',
      responses: [],
      route: '',
      status: '',
      subject: '',
      surname: ''
    };
    this.currentIndex = -1;
    if (sel == 1) {
      console.log('iam1');
      this.services.searchClaim(name)
        .subscribe(
          data => {
            console.log(data);
            this.claims = data;
          },
          error => {
            console.log(error);
          });
    }
    else if (sel == 2) {
      console.log('iam2');
      this.services.searchClaim2(name)
        .subscribe(
          data => {
            console.log(data);
            this.claims = data;
          },
          error => {
            console.log(error);
          });
    }
    else if (sel == 3) {
      console.log('iam3');
      this.services.searchClaim3(name)
        .subscribe(
          data => {
            console.log(data);
            this.claims = data;
          },
          error => {
            console.log(error);
          });
    }

  }
  load(){
    this.loadClaims();
  }

  selectOption(val: Event){
     this.ring = (val.target as HTMLInputElement).value;
     this.onKey(val, this.ring);
  }

}
