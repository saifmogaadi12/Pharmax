import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  passwordRecovery(){
    alert('Password sent to your email.');
  }
}
