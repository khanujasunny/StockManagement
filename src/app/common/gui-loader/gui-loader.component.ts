import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.interceptor';

@Component({
  selector: 'app-gui-loader',
  templateUrl: './gui-loader.component.html',
  styleUrls: ['./gui-loader.component.css']
})
export class GuiLoaderComponent implements OnInit {
  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  ngOnInit() {
  }
}
