import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Registration } from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  regFormData: Registration;
  url: any = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postRegForm(regFormData: Registration) {
    return this.http.post(this.url + '/registrations', regFormData);
  }
}
