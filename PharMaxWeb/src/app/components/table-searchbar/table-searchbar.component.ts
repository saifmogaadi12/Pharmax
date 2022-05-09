import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/ClaimService';
import {Claim} from "../../classes/claim";

@Component({
  selector: 'app-table-searchbar',
  templateUrl: './table-searchbar.component.html',
  styleUrls: ['./table-searchbar.component.css']
})
export class TableSearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
