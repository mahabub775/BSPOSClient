import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {  AbstractControl,  FormControl,  FormGroup,  NonNullableFormBuilder,  ValidatorFn,  Validators} from '@angular/forms';
import {CommonService} from '../../services/common.services';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

import { AuthService } from '../../core/services/auth.services';
@Component({
  selector: 'app-test',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <nz-form-item>
    <nz-form-label      [nzSm]="6"      [nzXs]="24"      nzFor="fullName"      nzRequired      nzTooltipTitle="What do you want other to call you"    >
     <span>Full Name</span>
    </nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your name!">
      <input nz-input id="name" formControlName="fullName" />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
  <nz-form-label      [nzSm]="6"      [nzXs]="24"      nzFor="username"      nzRequired      nzTooltipTitle="What do you want other to call you"    >
   <span>User Name</span>
  </nz-form-label>
  <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your username!">
    <input nz-input id="username" formControlName="userName" />
  </nz-form-control>
</nz-form-item>

  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="email">E-mail</nz-form-label>
    <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="The input is not valid E-mail!">
      <input nz-input formControlName="email" id="email" />
    </nz-form-control>
  </nz-form-item>
  
  <nz-form-item>
    <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="phoneNumber" nzRequired>Phone Number</nz-form-label>
    <nz-form-control
      [nzSm]="14"
      [nzXs]="24"
      [nzValidateStatus]="validateForm.controls['phoneNumber']"
      nzErrorTip="Please input your phone number!"
    >
      <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
        <ng-template #addOnBeforeTemplate>
          <nz-select formControlName="phoneNumberPrefix" class="phone-select">
            <nz-option nzLabel="+88" nzValue="+88"></nz-option>
            
          </nz-select>
        </ng-template>
        <input formControlName="phoneNumber" id="'phoneNumber'" nz-input />
      </nz-input-group>
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
  <nz-form-label      [nzSm]="6"      [nzXs]="24"      nzFor="address"   >
   <span>Address</span>
  </nz-form-label>
  <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="Please input your Address!">
    <input nz-input id="address" formControlName="address" />
  </nz-form-control>
</nz-form-item>

  <nz-form-item nz-row class="register-area">
    <nz-form-control [nzSpan]="14" [nzOffset]="6">
      <button nz-button nzType="primary">update</button>
    </nz-form-control>
  </nz-form-item>
</form>
  `,
  styles: `
  [nz-form] {
    max-width: 600px;
  }

  .phone-select {
    width: 70px;
  }

  .register-are {
    margin-bottom: 8px;
  }
  `
})
export class UserComponent  {


  
  userid:any;
  private User : any;
  validateForm: FormGroup<{
    id: FormControl<string>;
    email: FormControl<string>;
    fullName: FormControl<string>;
    userName: FormControl<string>;
    phoneNumberPrefix: FormControl<'+88'>;
    phoneNumber: FormControl<string>;
    address: FormControl<string>;
  }>;
  httpOptions  =<any> "";
   constructor(private fb: NonNullableFormBuilder , private _httpclient:HttpClient,  private location: Location,   private Auth:  AuthService, private UserService:UserService, private CommonService: CommonService, private ar: ActivatedRoute) {
   
    this.httpOptions = { headers:this.Auth.CurstomHeader() };
    this.validateForm = this.fb.group({
      id:'',
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      phoneNumberPrefix: '+88' as '+88',
      phoneNumber: ['', [Validators.required]],
      address:''
    });

    this.userid =   this.ar.snapshot.paramMap.get('id');
    
    if(this.userid !='' )
    {
        this.UserService.Get(this.userid).subscribe(r=> {
          this.User=r as any;
          console.log(this.User);
          this.validateForm = this.fb.group({
           id: [this.User.userId],
            email: [this.User.email, [Validators.email, Validators.required]],
            fullName: [this.User.fullName, [Validators.required]],
            userName: [this.User.userName, [Validators.required]],
            phoneNumberPrefix: '+88' as '+88',
            phoneNumber: [this.User.phoneNumber, [Validators.required]],
            address: [this.User.address], 
          });

        

        });
    }

  }


   ngOnInit(): void
   {
   
  }


  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      var oFormvalue = this.validateForm.value;
      var oUser = { 
           Id:this.userid,
           fullName: oFormvalue.fullName,
           userName: oFormvalue.userName, 
           email:oFormvalue.email,
           phoneNumber:oFormvalue.phoneNumber,
           address:oFormvalue.address,
         }

         this.UserService.Updateuser(oUser)
         .subscribe(o => {
           console.log(o);
             if (o.message=="2") {
               debugger;
                this.CommonService.SaveMessage(`Sucessfully Updated Data `);
               this.location.back();
             } else {
               this.CommonService.ErrorMessage (o.message);
             }
         }, o => {
           this.CommonService.ErrorMessage (`Invalid entry`);

         });
//       this._httpclient.put<any>(this.Auth.rootURI +'/user/Updateuser', oUser, this.httpOptions).subscribe(data => {
        
//         this.CommonService.SaveMessage(`Sucessfully Updated`);
//         this.location.back();
//     // Handle success
//     console.log(data);
// });



      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }




  



}

