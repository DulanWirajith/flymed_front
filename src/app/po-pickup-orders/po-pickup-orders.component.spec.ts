import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPickupOrdersComponent } from './po-pickup-orders.component';

describe('PoPickupOrdersComponent', () => {
  let component: PoPickupOrdersComponent;
  let fixture: ComponentFixture<PoPickupOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoPickupOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoPickupOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
