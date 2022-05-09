import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ClaimService} from '../../services/ClaimService';
import {Claim} from '../../classes/claim';
import {ComplainAccordionComponent } from '../../components/complain-accordion/complain-accordion.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})


export class EditUserComponent implements OnInit {
  get claims(): Claim {
    return this._claims;
  }

  set claims(value: Claim) {
    this._claims = value;
  }

  constructor(private modalService: NgbModal,  private services: ClaimService, private comp: ComplainAccordionComponent) { }


  // tslint:disable-next-line:variable-name
  @Input() private _claims: Claim  ;
  public activeModal: NgbActiveModal;

  close() {
     this.modalService.dismissAll();
  }
  ngOnInit(): void {
    const str = this.services.getSession('UserId').replace('"', '');
    console.log(this.services.getClaim(str.replace('"', '')).subscribe(pp => {
      // tslint:disable-next-line:no-unused-expression
      console.log(pp);
      (document.getElementById('subject') as HTMLInputElement).value = pp.subject;
      (document.getElementById('message') as HTMLInputElement).value = pp.claimText;
    }));
  }

  editClaim() {
    // @ts-ignore
    const newClaim: Claim = {
      subject: (document.getElementById('subject') as HTMLInputElement).value ,
      claimText: (document.getElementById('message') as HTMLInputElement).value,
    };
    const str = this.services.getSession('UserId').replace('"', '');
    this.services.editClaim(str.replace('"', ''), newClaim).subscribe(
      claimService => {
        alert('Your claim has been submitted.');
        this.modalService.dismissAll();
        this.comp.ngOnInit();
        window.location.reload();
      }
    );
  }


}
