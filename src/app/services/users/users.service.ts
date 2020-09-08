import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private REST_API_SERVER = environment.REST_API_SERVER;

  constructor(private httpClient: HttpClient) { }

  login(data: any) {
    return this.httpClient.get(this.REST_API_SERVER + '/users?email=' + data.email + '&password=' + data.password);
  }

  register(data: any) {
    return this.httpClient.post(this.REST_API_SERVER + '/users/', {
      "id": Math.floor(100000 + Math.random() * 900000),
      "name": data.name,
      "email": data.email,
      "password": data.password,
      "userType": 1,
      "token": "abc123efabc123efabc123efabc123efabc123efabc123ef" + Math.floor(100000 + Math.random() * 900000)
    });
  }

  logout() {
    // remove user from local storage to log user out
    
    return true;
  }

}