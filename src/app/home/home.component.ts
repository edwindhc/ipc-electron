import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { User } from '../models';
import { UserService, AuthenticationService } from '../services';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CardPaymentComponent } from './components/card-payment/card-payment.component';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    products = [];
    public destroy$: Subject<boolean> = new Subject<boolean>();
    spinner: Boolean;
    constructor(
        public authenticationService: AuthenticationService,
        private userService: UserService,
        private _bottomSheet: MatBottomSheet
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.spinner = this.authenticationService.spinnerValue;
    }

    ngOnInit() {
        this.loadAllProducts();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
      }

    private loadAllProducts() {
        this.userService.getAll().pipe(takeUntil(this.destroy$))
            .subscribe(products => {
                this.products = products.data
            });
    }
    openBottomSheet(price: Number): void {
        this._bottomSheet.open(CardPaymentComponent,{data: { cards: [
            {
                cardholderName: "SAM JONES",
                cardNumber: "4929000000006",
                expiryDate: "0320",
                securityCode: "123",
                price
            }
        ] },});
      }
}