import { Component, OnInit } from '@angular/core';
import { DeptaService } from './depta.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  status = [
    {id: 1, name: 'Active'},
    {id: 2, name: 'Inactive'},
  ];

  categories = [
    {title: 'TL', selected: false, id: 1},
    {title: 'PM', selected: false, id: 2},
    {title: 'SD', selected: false, id: 3}
  ];

  /*
  sltA: [];

  options = [
    {name: 'OptionA', value: '1', checked: false},
    {name: 'OptionB', value: '2', checked: false},
    {name: 'OptionC', value: '3', checked: false}
  ];
*/
  /*
  get selectedOptions() {
    return this.options
              .filter(opt => opt.checked)
              .map(opt => opt.value);
  }*/

  getSelectedCategories() {
    const selected = this.categories.filter(c => c.selected).map(c => c.id);
    console.log(selected);
  }
  constructor(private depta: DeptaService) { }

  ngOnInit() {
  }

  onChange(e) {
    console.log(e);

  }

  onSubmit(deptF: NgForm) {
    this.insertData(deptF);
  }

  insertData(deptF: NgForm) {
    this.depta.AddDepart(deptF.value).subscribe(res => {
      this.resetForm(deptF);
    });
  }

  resetForm(regForm?: NgForm) {
    if (regForm != null) {
      regForm.resetForm();
    }
    this.depta.deptData = {
      name: '',
      status: ''
    };
  }

}
