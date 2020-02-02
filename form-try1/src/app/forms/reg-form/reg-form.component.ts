import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private service: RegistrationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess(){
    this.toastr.success("Form has been submitted...");
  }

  onSubmit(regForm: NgForm) {
    this.insertData(regForm);
  }

  insertData(regForm: NgForm) {
    this.service.postRegForm(regForm.value).subscribe(res => {
      this.resetForm(regForm);
    });
  }

  resetForm(regForm?: NgForm) {
    if (regForm != null) {
      regForm.resetForm();
    }
    this.service.regFormData = {
      _id: null,
      userName: '',
      fName: '',
      mName: '',
      lName: '',
      email: '',
      phNumber: null,
      dob: '',
      gender: '',
      pswd: '',
    };
  }
}
