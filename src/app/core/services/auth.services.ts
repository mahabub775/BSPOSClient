import { Injectable } from '@angular/core';
import {JwtHelperService} from'@auth0/angular-jwt'
import {  CanActivate , Router} from '@angular/router';
// import { AdminlayoutComponent } from '../admin/adminlayout.component';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

//import { NavmainmenuComponent } from '../admin/chayapath/navmainmenu/navmainmenu.component';
@Injectable()
export class AuthService implements CanActivate {

 // constructor() { }

 readonly rootURI =  'https://localhost:44301/v1'; 
 //readonly rootURI =  'https://pos.binarysoftbd.dev/api'; 
 oLoggedInUser:any;
  constructor( private  Router :Router,  public  jwthelper  :JwtHelperService,  private http: HttpClient  ) 
  { 
  }

  canActivate()
  {
    debugger; 
    const token = localStorage.getItem("jwt");
      if(token && !this.jwthelper.isTokenExpired(token))
      {


        
        return true;
      }else{
        //if validaty exists
        this.Router.navigateByUrl('/admin;');
        return false;
      }
  }
  CurstomHeader(){
    var t = localStorage.getItem("jwt");
    var headers_object = new HttpHeaders({  'Content-Type': 'application/json',  'Authorization': "Bearer "+t  });
    
    return  headers_object
  }
  
  GetuserLoginInfo(){
    //JSON.stringify(logininfo)
    this.oLoggedInUser= localStorage.getItem("logininfo");
     return this.oLoggedInUser?  JSON.parse(this.oLoggedInUser):null;
  }
// //#region  Login
LogIn(userId :any, password :any) {
  let obj = { userName: userId, password: password };
  return this.http.post(this.rootURI+"/Auth/Login", obj, { observe: 'response' })
}
LogOut() {
  return this.http.get(this.rootURI+"/Auth/Logout", { observe: 'response' });
}

// LogOut(){
//   return this.http.get(this.rootURI+`/Auth/GetLogout`);
// }
}
