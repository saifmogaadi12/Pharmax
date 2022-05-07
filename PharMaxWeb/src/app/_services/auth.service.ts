import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:6868/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient  ) { 

    console.log(this.http.get<any>("http://localhost:6868/").subscribe(data => {
        console.log(data);
    },
    (error)=>{
      console.error('error Caught in compo');
    }
    ));
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  testConn(): boolean{
    console.log(this.http.get<any>("http://localhost:6868/").subscribe(data => {
        console.log(data);
    },
    (error)=>{
      console.error('error Caught in compo');
      return true;
    }
    ));

    return false;
  }
}