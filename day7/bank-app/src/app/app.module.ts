import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { BillPayAndRechargeComponent } from './bill-pay-and-recharge/bill-pay-and-recharge.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    FundTransferComponent,
    BillPayAndRechargeComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
