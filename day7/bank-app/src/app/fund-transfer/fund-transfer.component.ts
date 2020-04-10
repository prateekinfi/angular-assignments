import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fundTransferData } from './../mock/fundTransferData';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  fundstransferdata;
  constructor(private routerState: ActivatedRoute) { }

  ngOnInit(): void {
    this.fundstransferdata=fundTransferData;
  }

}
