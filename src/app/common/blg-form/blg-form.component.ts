import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formsConfig } from '../formsConfig';


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
  constructor() { }

  ngOnInit() {
    if (this.formName && formsConfig[this.formName]) {
      this.formModal = formsConfig[this.formName];
    }
  }

  onFrmSubmit() {
    this.onSubmit.emit({ success: true });
    console.log('on submit');
  }

  isInputType(type) {
    return (type !== 'textarea' && type !== 'select');
  }
}
