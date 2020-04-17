import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoArrangeDeliveriesComponent } from './po-arrange-deliveries.component';

describe('PoArrangeDeliveriesComponent', () => {
  let component: PoArrangeDeliveriesComponent;
  let fixture: ComponentFixture<PoArrangeDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoArrangeDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoArrangeDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
