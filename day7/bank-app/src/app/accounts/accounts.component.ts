import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { accountsData } from './../mock/accountsData';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountsdata;
  constructor(private routerState: ActivatedRoute) { }

  ngOnInit(): void {
  this.accountsdata=accountsData;
  }

}
