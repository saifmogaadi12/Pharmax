import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient.model';
import { MailModel } from 'src/app/models/MailModel.model';
HttpClient;

@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  url: string = 'http://localhost:8080/api/docteur/';

  constructor(private http: HttpClient) {}

  getDoctors() {
    //console.log("in get service")
    return this.http.get<any>(this.url + 'all');
  }

  searchPatient(nom: string) {
    //console.log("in search service")
    return this.http.get<Patient[]>(
      this.url.concat('/search/?nom=').concat(nom)
    );
  }

  searchPatientById(id: string) {
    //console.log("in search service")
    return this.http.get<Patient>(this.url.concat('/searchbyid/').concat(id));
  }

  addPatient(data: Patient) {
    console.log('DATA*************' + data);
    return this.http.post(this.url.concat('/ajouter'), data);
  }

  deletePatient(id: any) {
    return this.http.get(this.url.concat('/delete/').concat(id));
  }

  updatePatient(id: any, data: Patient) {
    return this.http.post(this.url.concat('/update/').concat(id), data);
  }

  maillerPatient(id: any, data: MailModel) {
    return this.http.post(this.url.concat('/mailler/').concat(id), data);
  }
}
