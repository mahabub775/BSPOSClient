import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../core/services/auth.services"
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
 private rootURI = '';
  constructor(private message: NzMessageService, private http: HttpClient, private AuthService:AuthService) { 
    this.rootURI = AuthService.rootURI;
  }

  //#region  Message show
SaveMessage(sMessage:string){
  this.message.create('success', sMessage );
}

WaringMessage(sMessage:string){
  this.message.create('warning', sMessage);
}

ErrorMessage(sErrorMessage:string){
  this.message.create('error', sErrorMessage);
}
//#endregion

//#region load indicator
ActionLoading(Message:string): void {
  const id = this.message.loading(Message, { nzDuration: 0 }).messageId;
  setTimeout(() => {
    this.message.remove(id);
  }, 2500);
}
//#endregion


}
