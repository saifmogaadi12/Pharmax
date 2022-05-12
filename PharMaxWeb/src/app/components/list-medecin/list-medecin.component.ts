import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css'],
})
export class ListMedecinComponent implements OnInit {
  doctors: any;
  constructor(
    private medecinService: MedecinService,
    private table: DatatableComponent
  ) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.medecinService.getDoctors().subscribe((data) => {
      this.doctors = data.docteurs;
      console.log(data.docteurs);
    });
  }
}
