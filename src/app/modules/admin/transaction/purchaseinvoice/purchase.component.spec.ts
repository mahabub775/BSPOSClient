import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoiceComponent } from './purchaseinvoice.component';

describe('PurchaseComponent', () => {
  let component: PurchaseInvoiceComponent;
  let fixture: ComponentFixture<PurchaseInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
