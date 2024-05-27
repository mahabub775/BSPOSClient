import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PurchaseInvoiceComponent } from './purchaseinvoice/purchaseinvoice.component';
import { SaleinvoiceComponent } from './saleinvoice/saleinvoice.component';


@NgModule({
  declarations: [
    PurchaseInvoiceComponent,
    SaleinvoiceComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
