import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login.component';

import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { AdminlayoutComponent } from './modules/admin/adminlayout.component';
const routes: Routes = [ 
  {
    path: '', component: LoginlayoutComponent, loadChildren: () => import('./loginlayout/loginlayout.module').then(m => m.LoginlayoutModule)
  },

  { path: 'login', component: LoginComponent }

  //    { path: 'userprofile/:type' , component: UserprofileComponent},
  //{ path:'resetpass/:userid' , component: ResetPasswordComponent},
  // {
  //   path: 'admin', component: AdminlayoutComponent, loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }