import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlgService } from '../blg-service';

@Component({
  selector: 'app-manage-catagories',
  templateUrl: './manage-catagories.component.html',
  styleUrls: ['./manage-catagories.component.css']
})
export class ManageCatagoriesComponent implements OnInit {
  categories: any;

  constructor(private route: ActivatedRoute, private service: BlgService) {

    service.userInfo.subscribe(data => {

    });


  }

  ngOnInit() {
  }

}
