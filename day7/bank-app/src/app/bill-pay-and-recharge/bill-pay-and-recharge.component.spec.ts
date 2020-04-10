import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPayAndRechargeComponent } from './bill-pay-and-recharge.component';

describe('BillPayAndRechargeComponent', () => {
  let component: BillPayAndRechargeComponent;
  let fixture: ComponentFixture<BillPayAndRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPayAndRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPayAndRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
