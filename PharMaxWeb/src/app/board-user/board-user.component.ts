import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
  goTosearchPatient(id: string ){

    console.log('NOM SEARCH'+this.nom)
      id=this.nom;
    this.router.navigate(['/searchPatient', {recherche:id}]);
  }*/
}
