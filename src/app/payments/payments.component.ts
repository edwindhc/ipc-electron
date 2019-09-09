import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import * as moment from 'moment';

export interface PaymentTable {
  transactionId: string;
  description: string;
  price: number;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['transactionId', 'description', 'price', 'status','createdAt'];
  dataSource = [];
  payment: any;

  constructor(private userService: PaymentService) { }

  ngOnInit() {
    this.loadAllPayments()
  }

  private loadAllPayments() {
    this.userService.getAll()
        .subscribe(payment => {
            this.dataSource = payment.data
            this.transform(payment.data)
        });
  }
  transform(data){
    let transform = data.map(r => {
      r.createdAt = moment(r.createdAt).format('DD/MM/YYYY HH:mm:ss')
      return r
    })
    this.dataSource = transform
  }

}
