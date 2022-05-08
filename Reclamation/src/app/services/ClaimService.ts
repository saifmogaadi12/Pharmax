import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Claim} from '../classes/claim';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private baseUrl = 'http://localhost:5000/api/rendezvous';

  private claimsAc: BehaviorSubject<Claim[]> = new BehaviorSubject<Claim[]>([]);
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getClaims(): Observable<Claim[]> {
    return this.claimsAc.asObservable();
  }

  // tslint:disable-next-line:typedef
  setClaims(claims: Claim[]): void {
    this.claimsAc.next(claims);
  }

  // tslint:disable-next-line:typedef
  loadClaims() {
    return this.http.get<Claim[]>(`${this.baseUrl}`);
  }

  getId() {
    return this.http.get<Claim[]>(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  loadClaimsOfAUser(route: string) {
    return this.http.get<Claim[]>(`${this.baseUrl}?route=${route}`);
  }

  // tslint:disable-next-line:typedef
  addUserClaim(claim: Claim) {
    console.log(JSON.stringify(claim));
    return this.http.post<Claim>(`${this.baseUrl}`, claim);
  }
// tslint:disable-next-line:typedef
  editClaim(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/${id}` , data);
    console.log(id);
  }

  searchClaim(data: any) {
    return this.http.get(`${this.baseUrl}/find/${data}` , data);
  }

  searchClaim2(data: any) {
    return this.http.get(`${this.baseUrl}/find2/${data}` , data);
  }
  searchClaim3(data: any) {
    return this.http.get(`${this.baseUrl}/find3/${data}` , data);
  }

  deleteClaim(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}` , id);
  }
  // tslint:disable-next-line:ban-types
  getClaim(id: number) {
    // tslint:disable-next-line:ban-types
    return this.http.get<Claim>(`${this.baseUrl}/${id}`);
  }

  setSession(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: string): any {
    if (typeof window !== 'undefined') {
      const retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
    }
  }
  clearSession(): void {
    localStorage.clear();
  }

}

