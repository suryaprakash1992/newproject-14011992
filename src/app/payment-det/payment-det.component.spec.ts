import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetComponent } from './payment-det.component';

describe('PaymentDetComponent', () => {
  let component: PaymentDetComponent;
  let fixture: ComponentFixture<PaymentDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
