import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationRoutingModule } from './basic-operation-routing.module';
import { ContractorsComponent } from './contractor/contractors.component';
import { ContractorComponent } from './contractor/contractor.component';
import { MeasurementunitsComponent } from './measurementunit/measurementunits.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';


@NgModule({
  declarations: [
    ContractorsComponent,
    ContractorComponent,
    MeasurementunitsComponent,
    ProductcategoryComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    BasicOperationRoutingModule
  ]
})
export class BasicOperationModule { }
