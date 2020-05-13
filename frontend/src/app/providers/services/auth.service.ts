import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + ENDPOINTS.AUTH;

    constructor(
      private http: HttpClient
    ) { }

    public login(login: Login): Observable<HttpResponse<any>> {
      return this.http.post(`${this.authUrl}login`, login, { observe: 'response' });
    }
}
