import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Department } from './dept.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeptaService {
  token;
  deptData: Department;
  url: any = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  AddDepart(deptData: Department) {
    const Url = this.url + 'department/' + 'create';
    let header = {
    headers: new HttpHeaders().set('Content-Type', `application/json`).set('token', `${this.token}`)
    };
    return this.http.post(`${Url}`, deptData, header);
    }
}
