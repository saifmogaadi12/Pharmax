import { Component, Input, OnInit } from '@angular/core';
import {Claim} from '../../classes/claim';
import {ClaimService} from '../../services/ClaimService';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material';
import {HomeUserComponent} from '../../views/home-user/home-user.component'

@Component({
  selector: 'app-complain-accordion',
  templateUrl: './complain-accordion.component.html',
  styleUrls: ['./complain-accordion.component.css']
})

export class ComplainAccordionComponent implements OnInit {

  // filterargs = { route: '1' };

  constructor(private services: ClaimService, private modalService: NgbModal ,private dialog: MatDialog ,private ger: HomeUserComponent) { }

  @Input() claims: Claim[] = [];

  // tslint:disable-next-line:typedef
  filterStatusInProgress(claims: any) {
    return claims.status === 'In Progress';
  }

  // tslint:disable-next-line:typedef
  filterStatusSent(claims: any) {
    return claims.status === 'Submitted';
  }

  // tslint:disable-next-line:typedef
  filterStatusFinished(claims: any) {
    return claims.status === 'Done';
  }

  // tslint:disable-next-line:typedef
  filterStatusError(claims: any) {
    return claims.status === 'Error';
  }

  ngOnInit(): void {
    this.loadClaims();
    this.services.getClaims().subscribe(
      (claims: Claim[]) => {
        this.claims = claims;
      }
    );
  }
  // tslint:disable-next-line:typedef
  public loadClaims() {
    this.services.loadClaims().subscribe(ClaimsServices => {
      this.claims = ClaimsServices;
    });
  }
  // tslint:disable-next-line:typedef
  async loadClaimsAsc() {
    this.claims = await this.services.loadClaims().toPromise();
  }
  // tslint:disable-next-line:typedef
  openDialogEdit(id) {
    this.services.setSession('UserId', id);
    const ref = this.modalService.open(EditUserComponent);
    ref.componentInstance.id = id;
    ref.result.then((yes) => {
      console.log('ok click');
    },
      (cancel) => {
        console.log('Cancel click');
      }
      );
  }

  Delete(id) {
    // let's call our modal window
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Are you sure?",
        message: "You are about to delete it "}
    });

    // listen to response
    dialogRef.afterClosed().subscribe(dialogResult => {
      // if user pressed yes dialogResult will be true,
      // if he pressed no - it will be false
      if (dialogResult) {
        this.services.deleteClaim(id).subscribe();
        console.log(id);
        this.loadClaimsAsc();
        this.ger.ngOnInit();
        console.log(JSON.stringify(this.claims));
        //window.location.reload();

      } });
  }
}
