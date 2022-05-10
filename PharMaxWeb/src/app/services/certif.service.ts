import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient.model';
import { MailModel } from 'src/app/models/MailModel.model';
HttpClient;

@Injectable({
  providedIn: 'root',
})
export class CertifService {
  url: string = 'http://localhost:8080/api/certif/';
  medicUrl = 'http://localhost:8080/api/medicament/';
  constructor(private http: HttpClient) {}

  getCertifs() {
    //console.log("in get service")
    return this.http.get<any>(this.url + 'all');
  }
  getMedic() {
    //console.log("in get service")
    return this.http.get<any>(this.medicUrl + 'all');
  }

  addCertif(data: any) {
    console.log('DATA*************' + data);
    return this.http.post(this.url.concat('nouveau'), data);
  }

  deleteCertif(id: any) {
    console.log(id);
    return this.http.delete(this.url.concat(id));
  }

  updateCerif(id: any, data: any) {
    return this.http.put(this.url.concat('modifier/').concat(id), data);
  }
  getStats() {
    return this.http.get<any>(this.url + 'stats');
  }
}
