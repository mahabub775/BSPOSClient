import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorsComponent } from './contractor/contractors.component';
import {AuthService} from '../../../core/services/auth.services'
const routes: Routes = [

  {  path: 'contractors', component: ContractorsComponent,  canActivate:[AuthService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationRoutingModule { }
