import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { BillPayAndRechargeComponent } from './bill-pay-and-recharge/bill-pay-and-recharge.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'fundtransfer', component: FundTransferComponent },
  { path: 'billpayandrecharge', component: BillPayAndRechargeComponent },
  { path: 'offers', component: OffersComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full'},
  { path: '**', redirectTo: '/accounts', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
