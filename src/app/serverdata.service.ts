import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerdataService {
  globalPath: any;
  constructor(
    private http: HttpClient
  ) {
    this.globalPath = "https://ticket-challange.herokuapp.com/";
   }
  gettingData(url) {
    return this.http.get(this.globalPath + url)
  }
  postingData(url,item) {
    return this.http.post(this.globalPath + url,item);
  }
}
