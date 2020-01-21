import { Component, OnInit } from '@angular/core';
import { navItems } from './_blgNav';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  breadcrumbs: string[];

  constructor(private activeRouter: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = (event.url.split('/'));
        this.breadcrumbs.shift();
      }
    });
  }

  ngOnInit() {
    console.info('init');
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
