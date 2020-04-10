import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { billPayAndRechargeData } from './../mock/billPayAndRechargeData';

@Component({
  selector: 'app-bill-pay-and-recharge',
  templateUrl: './bill-pay-and-recharge.component.html',
  styleUrls: ['./bill-pay-and-recharge.component.css']
})
export class BillPayAndRechargeComponent implements OnInit {

  billpayandrechargedata;
  constructor(private routerState: ActivatedRoute) { }

  ngOnInit(): void {
    this.billpayandrechargedata=billPayAndRechargeData;
  }

}
