import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdtlComponent } from './paymentdtl.component';

describe('PaymentdtlComponent', () => {
  let component: PaymentdtlComponent;
  let fixture: ComponentFixture<PaymentdtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentdtlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentdtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
