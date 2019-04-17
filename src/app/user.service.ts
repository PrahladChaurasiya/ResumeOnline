import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';


  constructor(private http: HttpClient) { }
addUser(username,email,password){
  const obj = {
    username: username,
    email: email,
    password: password
  };

  console.log(obj);
  this.http.post(`${this.uri}/add`, obj)
  .subscribe(res => console.log('Done'));
}

}
