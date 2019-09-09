import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule, MatDialogRef, MAT_DIALOG_DATA,
  MatCardModule, MatGridListModule, MatBottomSheetModule,MatListModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule
} from '@angular/material';
import {MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { CardPaymentComponent } from './components/card-payment/card-payment.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  providers: [{ provide: MatDialogRef, useValue: {} },{ provide: MAT_DIALOG_DATA, useValue: [] }],
  declarations: [HomeComponent, CardPaymentComponent, DialogComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MatMenuModule,
    MatButtonModule, MatGridListModule,MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  FormsModule,
  MatInputModule,
  MatCardModule],
  exports: [MatMenuModule,
    MatButtonModule, MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, CardPaymentComponent],
  entryComponents: [HomeComponent, CardPaymentComponent, DialogComponent]
})
export class HomeModule {}
