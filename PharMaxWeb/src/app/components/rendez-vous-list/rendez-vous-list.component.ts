import { Component, OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous.model';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit {

  rendezvous?: RendezVous[];
  currentRendezVous: RendezVous = {};
  currentIndex = -1;
  title = '';

  constructor(private rendezvousService: RendezVousService) { }

  ngOnInit(): void {
    this.retrieveRendezVous();
  }

  retrieveRendezVous(): void {
    this.rendezvousService.getAll()
      .subscribe(
        data => {
          this.rendezvous = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRendezVous();
    this.currentRendezVous = {};
    this.currentIndex = -1;
  }

  setActiveRendezVous(rendezvous: RendezVous, index: number): void {
    this.currentRendezVous = rendezvous;
    this.currentIndex = index;
  }

  removeAllRendezVous(): void {
    this.rendezvousService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentRendezVous = {};
    this.currentIndex = -1;

    this.rendezvousService.findByTitle(this.title)
      .subscribe(
        data => {
          this.rendezvous = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
