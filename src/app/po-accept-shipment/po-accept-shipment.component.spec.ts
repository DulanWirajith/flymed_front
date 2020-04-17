import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAcceptShipmentComponent } from './po-accept-shipment.component';

describe('PoAcceptShipmentComponent', () => {
  let component: PoAcceptShipmentComponent;
  let fixture: ComponentFixture<PoAcceptShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoAcceptShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoAcceptShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
