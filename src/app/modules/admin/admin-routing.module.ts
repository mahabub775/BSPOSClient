import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserregistrationComponent } from './userregistration.component';
import {AuthService} from '../../core/services/auth.services'
import { UserComponent } from './user.component';
import { AdminlayoutComponent } from './adminlayout.component';
import { ChangePasswordComponent } from './change-password.component';
const routes: Routes = [
  //{  path: '', component: UsersComponent,  canActivate:[AuthService] },
// { path: '', component:AdminlayoutComponent },
// { path: 'mainlayout',  loadChildren: () => import('./mainlayout/mainlayout.module').then(m => m.MainlayoutModule), canActivate:[AuthService] },

  { path: 'basic',  loadChildren: () => import('./basic-operation/basic-operation.module').then(m => m.BasicOperationModule), canActivate:[AuthService] },
  {  path: 'users', component: UsersComponent,  canActivate:[AuthService] },
  {  path: 'user/:id', component: UserComponent,  canActivate:[AuthService]},
  {  path: 'userreg', component: UserregistrationComponent,  canActivate:[AuthService] },
  { path: 'changepass', component: ChangePasswordComponent , canActivate:[AuthService] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
