import { Routes } from '@angular/router';
import { GroupCustomerComponent } from './group-customer/group-customer.component';

export const routes: Routes = [
  { path: '', component: GroupCustomerComponent },
  { path: 'group-customer', component: GroupCustomerComponent }
];
