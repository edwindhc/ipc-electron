import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { PaymentService } from '../../../services/payment.service';
import { AuthenticationService } from '../../../services';
import { User } from '../../../models';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BehaviorSubject } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})



export class CardPaymentComponent implements OnInit {

  currentUser: User;
  spinner: Boolean;
  payment = []

  animal: string;
  name: string;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private authenticationService: AuthenticationService,
  private _bottomSheetRef: MatBottomSheetRef<CardPaymentComponent>,
  public dialog: MatDialog,
  private paymentService: PaymentService) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.spinner = this.authenticationService.spinnerValue
    let detectCardType = [
      {regEx: /^4[0-9]{5}/ig,cardType: "VISA"},
      {regEx: /^5[1-5][0-9]{4}/ig,cardType: "MASTERCARD"},
      {regEx: /^3[47][0-9]{3}/ig,cardType: "AMEX"},
      {regEx: /^(5[06-8]\d{4}|6\d{5})/ig,cardType: "MAESTRO"}
    ];
    const tansform = data.cards.map(d => {
      detectCardType.map(c => {
        if (d.cardNumber.match(c.regEx)) return d.cardType = c.cardType
      })
      d.cardNumberTransform = d.cardNumber.replace(/^.{9}/g, '********')
      return d;
    })
    data = tansform;
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
  }

  async openLink(card: Object) {
    this._bottomSheetRef.dismiss();
    this.authenticationService.setSpinner(new BehaviorSubject<any>(true))
    let data: any;
    data = card
    data.userId = this.currentUser.user.id
    this.paymentService.create(data).subscribe(async (payment) => {
      this.payment = payment.data
      this.authenticationService.setSpinner(new BehaviorSubject<any>(false))
      this.dialog.open(DialogComponent, {
        width: '50%',
        data: payment
      });

    })

  }

  ngOnInit() {
  }

}