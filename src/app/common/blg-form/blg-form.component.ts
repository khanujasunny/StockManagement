import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formsConfig } from '../formsConfig';
import { BlgService } from '../../authenticated/blg-service';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";

/*
This is a common form component can be used by any component which have form
We manage it by a JSON object where we add all configuration of a form
It will:
  Accept:
    formName - this name must be declared in formsConfig.ts file

*/


@Component({
  selector: 'app-blg-form',
  templateUrl: './blg-form.component.html',
  styleUrls: ['./blg-form.component.css']
})
export class BlgFormComponent implements OnInit {

  @Input() formName: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit = new EventEmitter();

  formModal: any;
  formData: any = {};

  constructor(private service: BlgService, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.formName && formsConfig[this.formName]) {
      this.formModal = formsConfig[this.formName];
    }
    setTimeout(() => {
      $('input:enabled:visible:first').focus();
    });
  }

  onFrmSubmit() {
    if (this.formModal.submitAPI) {
      this.service.postAPI(this.formModal.submitAPI, this.formData).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.toastr.success('Successful!', data.message, { timeOut: 3000 });
          this.onSubmit.emit({ success: true, data: this.formData });
          this.resetForm();
          $('input:enabled:visible:first').focus();
        }
        if (data.status === 400) {
          this.toastr.error('Error!', data.message, { timeOut: 3000 });
          this.onSubmit.emit({ success: true, data: this.formData });
          this.resetForm();
        }
      });
    } else {
      this.onSubmit.emit({ success: true, data: this.formData });
    }
    console.log('on submit');
  }

  resetForm() {
    this.formData = {};
    $('input:enabled:visible:first').focus();
  }

  isInputType(type: string) {
    return (type !== 'textarea' && type !== 'select');
  }
}
