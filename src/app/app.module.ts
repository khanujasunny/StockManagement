import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './public/error/404.component';
import { P500Component } from './public/error/500.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';


import './common/utils/util-enter-as-tab';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { BaseComponent } from './authenticated/base/base.component';
import { ManageEmployeesComponent } from './authenticated/manage-employees/manage-employees.component';
import { ManageVendorsComponent } from './authenticated/manage-vendors/manage-vendors.component';
import { ManageCatagoriesComponent } from './authenticated/manage-catagories/manage-catagories.component';
import { ManageRoleComponent } from './authenticated/manage-role/manage-role.component';
import { ManageBrandsComponent } from './authenticated/manage-brands/manage-brands.component';
import { ManageUnitsComponent } from './authenticated/manage-units/manage-units.component';
import { ManageProductsComponent } from './authenticated/manage-products/manage-products.component';
import { ProductsOnRentComponent } from './authenticated/products-on-rent/products-on-rent.component';
import { ManageStoreComponent } from './authenticated/manage-store/manage-store.component';
import { ManageAuditsComponent } from './authenticated/manage-audits/manage-audits.component';
import { ReportsComponent } from './authenticated/reports/reports.component';
import { ManageLocationsComponent } from './authenticated/manage-locations/manage-locations.component';
import { SettingsComponent } from './authenticated/settings/settings.component';
import { SupportAndHelpComponent } from './authenticated/support-and-help/support-and-help.component';
import { AboutSoftwareAndLicenceComponent } from './authenticated/about-software-and-licence/about-software-and-licence.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BlgFormComponent } from './common/blg-form/blg-form.component';
import { CamelCasePipe } from './common/camel-case.pipe';
import { EditProfileComponent } from './authenticated/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './authenticated/change-password/change-password.component';
import { ManageCountryComponent } from './authenticated/manage-locations/manage-country/manage-country.component';
import { ManageCityComponent } from './authenticated/manage-locations/manage-city/manage-city.component';
import { ManageStateComponent } from './authenticated/manage-locations/manage-state/manage-state.component';

import { StorageServiceModule } from 'angular-webstorage-service';
import { GuiLoaderComponent } from './common/gui-loader/gui-loader.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderService, LoaderInterceptor } from './common/gui-loader/loader.interceptor';
import { ProgressbarModule } from 'ngx-bootstrap';
import { BlgListingLayoutComponent } from './common/blg-listing-layout/blg-listing-layout.component';
import { AddCatagoryComponent } from './authenticated/manage-catagories/add-catagory/add-catagory.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap';
import * as $ from "jquery";

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    ProgressbarModule.forRoot(),
    ModalModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    BaseComponent,
    ManageEmployeesComponent,
    ManageVendorsComponent,
    ManageCatagoriesComponent,
    ManageRoleComponent,
    ManageBrandsComponent,
    ManageUnitsComponent,
    ManageProductsComponent,
    ProductsOnRentComponent,
    ManageStoreComponent,
    ManageAuditsComponent,
    ReportsComponent,
    ManageLocationsComponent,
    SettingsComponent,
    SupportAndHelpComponent,
    AboutSoftwareAndLicenceComponent,
    BlgFormComponent,
    CamelCasePipe,
    EditProfileComponent,
    ChangePasswordComponent,
    ManageCountryComponent,
    ManageCityComponent,
    ManageStateComponent,
    GuiLoaderComponent,
    BlgListingLayoutComponent,
    AddCatagoryComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    LoaderService,
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
