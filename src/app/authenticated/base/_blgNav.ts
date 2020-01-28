import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Manage Employees',
    url: '/dashboard/manageEmployees',
    icon: 'icon-people'
  },
  {
    name: 'Manage Vendors',
    url: '/dashboard/manageVendors',
    icon: 'icon-folder-alt'
  },
  {
    name: 'Manage Catagories',
    url: '/dashboard/manageCategory',
    icon: 'icon-folder-alt'
  },
  {
    name: 'Manage Role',
    url: '/dashboard/manageRole',
    icon: 'icon-people'
  },
  {
    name: 'Manage Brands',
    url: '/dashboard/manageBrands',
    icon: 'icon-folder-alt'
  },
  {
    name: 'Manage Units',
    url: '/dashboard/manageUnits',
    icon: 'icon-folder-alt'
  },
  {
    name: 'Manage Products',
    url: '/dashboard/manageProducts',
    icon: 'icon-folder-alt'
  },
  {
    name: 'Products On Rent',
    url: '/dashboard/productsOnRent',
    icon: 'icon-list'
  },
  {
    name: 'Manage Stores',
    url: '/dashboard/manageStores',
    icon: 'icon-home'
  },
  {
    name: 'Manage Audits',
    url: '/dashboard/manageAudits',
    icon: 'icon-eye'
  },
  {
    name: 'Reports',
    url: '/dashboard/reports',
    icon: 'icon-docs',
    badge: {
      variant: 'info',
      text: 'up to 10'
    }
  },
  {
    name: 'Manage Locations',
    url: '/dashboard/manageLocations',
    icon: 'icon-location-pin',
    children: [
      {
        name: 'Manage Country',
        url: '/dashboard/manageLocations/country',
        icon: 'icon-location-pin'
      },
      {
        name: 'Manage State',
        url: '/dashboard/manageLocations/country/state',
        icon: 'icon-location-pin'
      },
      {
        name: 'Manage City',
        url: '/dashboard/manageLocations/country/state/city',
        icon: 'icon-location-pin'
      }
    ]
  },
  {
    name: 'Settings',
    url: '/dashboard/settings',
    icon: 'icon-wrench'
  },
  {
    name: 'Support & Help',
    url: '/dashboard/supportAndHelp',
    icon: 'icon-support'
  },
  {
    name: 'About Software & Licence',
    url: '/dashboard/aboutSoftwareAndLicence',
    icon: 'icon-info'
  }
];
