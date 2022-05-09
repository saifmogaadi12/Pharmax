import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/rendez-vous.model';

const baseUrl = 'http://localhost:8080/api/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(baseUrl);
  }

  get(id: any): Observable<RendezVous> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${baseUrl}?title=${title}`);
  }
}
