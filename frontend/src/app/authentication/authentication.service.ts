import { Injectable } from '@angular/core';
import {UserDTO} from "./authentication-model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {CommonService} from "../common/common.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends CommonService {

  public loggedUser: UserDTO;

  constructor(private http: HttpClient) {
    super()
  }

  logout(): Observable<any> {
    return this.http.get('/api/logout', {headers: this.getHeaders()});
  }

  getLoggedUser(): Observable<UserDTO> {
    if (this.loggedUser) {
      return Observable.create(this.loggedUser);
    } else {
      return this.http.post<UserDTO>('/api/authentication/loggedUser', {headers: this.getEncodedHeaders()});
    }
  }

  public hasAdminRole(): boolean {
    if (!this.loggedUser || !this.loggedUser.roles) {
      return false;
    } else {
      return this.loggedUser.roles.indexOf('ROLE_ADMIN') > -1;
    }
  }

}
