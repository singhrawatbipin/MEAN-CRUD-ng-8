import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Quotaion } from './quotaion.model';

@Injectable({
  providedIn: 'root'
})
export class QuotaionService {

  quotFormData: Quotaion;
  quotations: Quotaion[];

  url: any = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postRegForm(quotFormData: Quotaion) {
    return this.http.post(this.url + '/quotations', quotFormData);
  }

  getQuotationDetails() {
    return this.http.get(this.url + '/quotations');
  }

  putQuotationDetails(quotFormData: Quotaion) {
    return this.http.put(this.url + '/quotations' + `/${quotFormData._id}`, quotFormData);
  }

  deleteQuotationDetail(_id: any) {
    return this.http.delete(this.url + '/quotations' + `/${_id}`);
  }
}
