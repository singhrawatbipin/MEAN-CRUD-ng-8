import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { QuotaionService } from './quotaion.service';
import { Quotaion } from './quotaion.model';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {


  constructor(private service: QuotaionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshQuotationDetails();
  }

  onSubmit(quotForm: NgForm) {
    if(quotForm.value._id){
      this.updateData(quotForm);
    }
    else{
      this.insertData(quotForm);
    }
  }

  insertData(quotForm: NgForm) {
    this.service.postRegForm(quotForm.value).subscribe(res => {
      this.resetForm(quotForm);
      this.toastr.success("Form has been submitted.");
    });
  }

  updateData(quotForm: NgForm) {
    this.service.putQuotationDetails(quotForm.value).subscribe(res => {
      this.resetForm(quotForm);
      this.toastr.success("Details have been updated.");
    });
  }

  resetForm(quotForm?: NgForm) {
    if (quotForm != null) {
      quotForm.resetForm();
    }
    this.service.quotFormData = {
      _id: null,
      businessName: '',
      natureOfBusiness: '',
      contactPerson: '',
      email: '',
      businessAddress: '',
      website: '',
      lNumber: null,
      reqDescription: ''
    };
    this.refreshQuotationDetails();
  }

  refreshQuotationDetails() {
    this.service.getQuotationDetails().subscribe((res) => {
      this.service.quotations = res as Quotaion[];
    });
  }

  onEdit( quotaion: Quotaion ) {
    this.service.quotFormData = quotaion;
  }



  onDelete(_id: string, quotForm: NgForm) {
    if (confirm('Are you sure?') === true) {
      this.service.deleteQuotationDetail(_id).subscribe((res) => {
        this.refreshQuotationDetails();
        this.resetForm(quotForm);
      });
    }
  }

}
