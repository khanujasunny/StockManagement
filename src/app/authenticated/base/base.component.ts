import { Component, OnInit } from '@angular/core';
import { navItems } from './_blgNav';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { BlgService } from '../blg-service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  breadcrumbs: string[];
  userInfo: any;

  constructor(private activeRouter: ActivatedRoute, private router: Router, private service: BlgService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = (event.url.split('/'));
        this.breadcrumbs.shift();
      }
    });
  }

  ngOnInit() {


    console.info('init');
    this.userInfo = this.service.getFromLocal('LOGIN_INFO');

    this.userInfo = { user: { firstName: 'Sunny', lastName: 'Khanuja' } };

    if (!this.userInfo) {
      this.router.navigate(['/login']);
    }
  }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logoutUser() {
    if (this.service.saveInLocal('LOGIN_INFO', null)) {
      this.router.navigate(['/login']);
    }
  }

}
