import { Component, OnInit, Input } from '@angular/core';
import { listConfig } from './blgListConfig';

@Component({
  selector: 'app-blg-listing-layout',
  templateUrl: './blg-listing-layout.component.html',
  styleUrls: ['./blg-listing-layout.component.css']
})
export class BlgListingLayoutComponent implements OnInit {

  @Input() tableName: any;
  tableData: any;
  constructor() {

  }

  ngOnInit() {
    if (this.tableName && listConfig[this.tableName]) {
      this.tableData = listConfig[this.tableName];
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

}
