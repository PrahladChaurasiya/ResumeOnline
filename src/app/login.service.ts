import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getHostElement(user:string, pass:string) : Observable<string>{

    console.log(user,pass);

    let data = {
      email : user,
      password : pass,
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    let options = { headers: headers };

    return this.http.post<string>('http://localhost:4000/login',data,options);
  }


}
