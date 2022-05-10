import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient.model';
import { MailModel } from 'src/app/models/MailModel.model';
HttpClient;

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  url: string = 'http://localhost:8080/api/docteur/';
  urll: string = 'http://localhost:3000/fiche_med';

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

  addDoctor(data: any) {
    console.log('DATA*************' + data);
    return this.http.post(this.url.concat('nouveau'), data);
  }

  deleteDoctor(id: any) {
    return this.http.delete(this.url.concat(id));
  }

  updateDoctor(id: any, data: any) {
    return this.http.put(this.url.concat('modifier/').concat(id), data);
  }

  maillerPatient(id: any, data: MailModel) {
    return this.http.post(this.url.concat('/mailler/').concat(id), data);
  }

  PDFPatient(id: any) {
    return this.http.get(this.urll.concat('/pdf/').concat(id));
  }
}
