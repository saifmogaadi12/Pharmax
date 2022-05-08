import { Component, OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous.model';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-add-rendez-vous',
  templateUrl: './add-rendez-vous.component.html',
  styleUrls: ['./add-rendez-vous.component.css']
})
export class AddRendezVousComponent implements OnInit {

  rendezvous: RendezVous = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private rendezvousService: RendezVousService) { }

  ngOnInit(): void {
  }

  saveRendezVous(): void {
    const data = {
      title: this.rendezvous.title,
      description: this.rendezvous.description
    };

    this.rendezvousService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRendezVous(): void {
    this.submitted = false;
    this.rendezvous = {
      title: '',
      description: '',
      published: false
    };
  }

}
