import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  // tslint:disable-next-line:typedef
  getUser(id: number) {
    return this.http.get<Users>('http://localhost:3000/users/' + id);
  }

  // tslint:disable-next-line:typedef
  createUser(user: Users) {
    return this.http.post<Users>('http://localhost:3000/users', user);
  }

  // tslint:disable-next-line:typedef
  editUser(user: Users) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

  // tslint:disable-next-line:typedef
  deleteUser(user: Users) {
    return this.http.delete('http://localhost:3000/users/' + user.id);
  }

  // tslint:disable-next-line:typedef
  login( email: string, password: string ){
    return this.http.post<any>('http://localhost:3001/login', { email:email, password: password });
  }
}
