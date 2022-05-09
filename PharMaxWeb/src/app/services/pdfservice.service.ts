import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf'
import { Claim } from '../classes/claim';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

  downloadPDF(claim: Claim): void
  {
    let doc = new jsPDF();
    doc = this.generatePDF(claim);
    doc.save( 'Claim-' + claim.id + '.pdf');
  }

  showPDF(claim: Claim): void
  {
    let doc = new jsPDF();
    doc = this.generatePDF(claim);
    doc.output('dataurlnewwindow');
  }

  // tslint:disable-next-line:ban-types
  generatePDF(claim: Claim): Object
  {
    const doc = new jsPDF();
    const img = new Image();
    img.src = '../../assets/drawkit-grape/LOGO.png';
    doc.addImage(img, 'png', 10, -2, 30, 30);
    doc.text(20, 35, 'Claim ID:' + claim.id);
    doc.text(20, 45, 'Route:' + claim.route);
    doc.text(20, 55, 'Username:' + claim.name + ' ' + claim.surname );
    doc.text(20, 65, 'Subject:' + claim.subject);
    doc.text(150, 20, 'Date:' + claim.date);
    doc.text(20, 75, 'Status:' + claim.status);
    doc.text(20, 85, 'Content:');
    const splitTitle = doc.splitTextToSize( claim.claimText, 180);
    doc.text(20, 95, splitTitle);
    if (claim.responses) {
      doc.text(20, 145, 'Answer:');
      const responses = doc.splitTextToSize( claim.responses, 180);
      doc.text(20, 155, responses);
    }
    return doc;
  }

}
