import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dept', pathMatch: 'full' },
  { 
    path: 'emp', 
    component: EmployeeListComponent,
    children: [
      {
          path: ':job',
          component: EmployeeDetailsComponent,
      }
  ] 
  },
  { path: 'dept', component: DeptListComponent },
  { path: 'details', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
