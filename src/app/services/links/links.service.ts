import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getAllLinks() {
    return this.httpClient.get(this.REST_API_SERVER + '/links');
  }

  getLinkById(id: number) {
    return this.httpClient.get(this.REST_API_SERVER + '/links/' + id);
  }

  addLink(data: any) {
    return this.httpClient.post(this.REST_API_SERVER + '/links/', data);
  }

  editLink(data: any, id: number,) {
    return this.httpClient.put(this.REST_API_SERVER + '/links/' + id, data);
  }

  deleteLinkById(id: any) {
    return this.httpClient.delete(this.REST_API_SERVER + '/links/' + id);
  }

}
