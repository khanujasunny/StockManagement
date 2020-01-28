import { Component, OnInit, Input } from '@angular/core';
import { listConfig } from './blgListConfig';
import { BlgService } from '../../authenticated/blg-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blg-listing-layout',
  templateUrl: './blg-listing-layout.component.html',
  styleUrls: ['./blg-listing-layout.component.css']
})
export class BlgListingLayoutComponent implements OnInit {

  @Input() tableName: any;
  @Input() defaultData: any;

  tableData: any;
  selectedConfirmation: any;

  constructor(private service: BlgService, private toastr: ToastrService) {

  }

  ngOnInit() {
    if (this.tableName && listConfig[this.tableName]) {
      this.tableData = listConfig[this.tableName];
    }
    if (this.defaultData) {
      this.tableData.data = this.defaultData;
    } else { this.getListData(); }
  }

  getListData() {
    if (this.tableData.apis.getAPI) {
      // check for API
      this.service.getAPI(this.tableData.apis.getAPI).subscribe((data: any) => {
        if (data.status === 200) {
          this.tableData.data = data.data;
        }
      });
    }
  }

  arrayFill(number: number) {
    return Array(number);
  }

  getSelectedLength() {
    let count = 0;
    for (const k in this.tableData.selected) {
      if (this.tableData.selected.hasOwnProperty(k) && this.tableData.selected[k]) {
        count++;
      }
    }
    return count;
  }

  doSelectedAction() {
    if (this.selectedConfirmation.action.deleteAPI) {
      this.service.deleteAPI(this.selectedConfirmation.action.deleteAPI.replace('{id}', this.selectedConfirmation.data['_id'])).subscribe((data: any) => {
        if (data.status === 200) {
          this.toastr.success('Successful!', data.message, { timeOut: 3000 });
          this.getListData();
        }
        if (data.status === 400) {
          this.toastr.error('Error!', data.message, { timeOut: 3000 });
        }
      });
    }
  }

}
