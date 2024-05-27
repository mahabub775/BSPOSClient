import { Component, OnInit,AfterViewInit } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth.services';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styles: ` .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  nz-header {
    background: #fff;
    padding: 0;
  }

  nz-content {
    margin: 0 16px;
  }

  nz-breadcrumb {
    margin: 16px 0;
  }

  .inner-content {
    padding: 24px;
    background: #fff;
    min-height: 360px;
  }

  nz-button-group {
    margin: 0 8px 8px 0;
  }


  nz-footer {
    text-align: center;
  } `
})
export class AdminlayoutComponent implements  AfterViewInit {

  isCollapsed = false;
  public IsLoggedIn = false;
  private logininfo:any;  username:string = "";
  constructor(private _router: Router, private Auth : AuthService, private jwthelper:JwtHelperService) {
    debugger;
    this.logininfo = this.Auth.GetuserLoginInfo();
    this.username = this.logininfo!=null?  this.logininfo.user.name:"";
  }

  ngAfterViewInit(): void {
    //this.username = "kdam"; //this.logininfo.user.username;
    
  }

Logout=()=>{
  //debugger;
  this.Auth.LogOut().subscribe(r => 
    {
      console.log(r);
    localStorage.removeItem("jwt");
    localStorage.removeItem("logininfo");
    this._router.navigateByUrl('/logout');
  })


}

changePassword =()=>{
  
  this._router.navigate(['admin/changepass']);
}

}