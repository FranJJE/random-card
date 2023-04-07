import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "https://randomuser.me/api";

  constructor( private http: HttpClient) { }

  getUser() {
    return this.http.get(this.baseUrl);
  }
}
