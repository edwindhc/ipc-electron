import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payments-routing.module';
import {MatTableModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatTableModule
  ]
})
export class PaymentsModule { }
