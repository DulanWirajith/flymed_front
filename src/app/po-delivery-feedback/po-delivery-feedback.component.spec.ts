import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDeliveryFeedbackComponent } from './po-delivery-feedback.component';

describe('PoDeliveryFeedbackComponent', () => {
  let component: PoDeliveryFeedbackComponent;
  let fixture: ComponentFixture<PoDeliveryFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoDeliveryFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoDeliveryFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
