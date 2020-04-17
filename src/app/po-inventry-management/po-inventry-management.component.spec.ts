import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoInventryManagementComponent } from './po-inventry-management.component';

describe('PoInventryManagementComponent', () => {
  let component: PoInventryManagementComponent;
  let fixture: ComponentFixture<PoInventryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoInventryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoInventryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
