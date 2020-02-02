import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RegFormComponent } from './forms/reg-form/reg-form.component';
import { RegistrationService } from './forms/reg-form/registration.service';
import { QuotationFormComponent } from './forms/quotation-form/quotation-form.component';
import { QuotaionService } from './forms/quotation-form/quotaion.service';
import {PasswordModule} from 'primeng/password';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    QuotationFormComponent,
    DeptComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PasswordModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [RegistrationService, QuotaionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
