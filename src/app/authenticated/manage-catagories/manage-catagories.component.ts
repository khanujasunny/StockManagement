import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-catagories',
  templateUrl: './manage-catagories.component.html',
  styleUrls: ['./manage-catagories.component.css']
})
export class ManageCatagoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
