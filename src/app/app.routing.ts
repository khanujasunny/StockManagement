import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './public/error/404.component';
import { P500Component } from './public/error/500.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuardService as AuthGuard } from './common/services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './common/services/role-guard.service';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
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
import { AboutSoftwareAndLicenceComponent } from './authenticated/about-software-and-licence/about-software-and-licence.component';
import { SupportAndHelpComponent } from './authenticated/support-and-help/support-and-help.component';
import { ManageAuditsComponent } from './authenticated/manage-audits/manage-audits.component';
import { ManageLocationsComponent } from './authenticated/manage-locations/manage-locations.component';
import { SettingsComponent } from './authenticated/settings/settings.component';
import { EditProfileComponent } from './authenticated/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './authenticated/change-password/change-password.component';
import { ReportsComponent } from './authenticated/reports/reports.component';
import { ManageCountryComponent } from './authenticated/manage-locations/manage-country/manage-country.component';
import { ManageCityComponent } from './authenticated/manage-locations/manage-city/manage-city.component';
import { ManageStateComponent } from './authenticated/manage-locations/manage-state/manage-state.component';
import { AddCatagoryComponent } from './authenticated/manage-catagories/add-catagory/add-catagory.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    component: BaseComponent,
    children: [
      {
        path: 'manageEmployees', component: ManageEmployeesComponent,
        children: [
          { path: 'add', component: ManageVendorsComponent }
        ]
      },
      { path: 'manageVendors', component: ManageVendorsComponent },
      {
        path: 'manageCategory', component: ManageCatagoriesComponent
      },
      {
        path: 'manageCategory/add', component: AddCatagoryComponent
      },
      { path: 'manageRole', component: ManageRoleComponent },
      { path: 'manageBrands', component: ManageBrandsComponent },
      { path: 'manageUnits', component: ManageUnitsComponent },
      { path: 'manageProducts', component: ManageProductsComponent },
      { path: 'productsOnRent', component: ProductsOnRentComponent },
      { path: 'manageStores', component: ManageStoreComponent },
      { path: 'manageAudits', component: ManageAuditsComponent },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'manageLocations', component: ManageLocationsComponent,
        children: [
          { path: 'country', component: ManageCountryComponent },
          { path: 'country/state', component: ManageStateComponent },
          { path: 'country/state/city', component: ManageCityComponent },
        ]
      },
      { path: 'settings', component: SettingsComponent },
      { path: 'supportAndHelp', component: SupportAndHelpComponent },
      { path: 'aboutSoftwareAndLicence', component: AboutSoftwareAndLicenceComponent },
      { path: 'editProfile', component: EditProfileComponent },
      { path: 'changePassword', component: ChangePasswordComponent }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'adminView',
        // canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin'
        },
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
