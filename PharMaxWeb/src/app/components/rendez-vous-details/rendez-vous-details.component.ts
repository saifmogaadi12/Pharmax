import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous.model';

@Component({
  selector: 'app-rendez-vous-details',
  templateUrl: './rendez-vous-details.component.html',
  styleUrls: ['./rendez-vous-details.component.css']
})
export class RendezVousDetailsComponent implements OnInit {

  currentRendezVous: RendezVous = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private rendezvousService: RendezVousService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRendezVous(this.route.snapshot.params.id);
  }
  getRendezVous(id: string): void {
    this.rendezvousService.get(id)
      .subscribe(
        data => {
          this.currentRendezVous = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentRendezVous.title,
      description: this.currentRendezVous.description,
      published: status
    };

    this.message = '';

    this.rendezvousService.update(this.currentRendezVous.id, data)
      .subscribe(
        response => {
          this.currentRendezVous.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateRendezVous(): void {
    this.message = '';

    this.rendezvousService.update(this.currentRendezVous.id, this.currentRendezVous)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Rendez vous was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRendezVous(): void {
    this.rendezvousService.delete(this.currentRendezVous.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/rendezvous']);
        },
        error => {
          console.log(error);
        });
  }

}
