import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodashbordComponent } from './podashbord.component';

describe('PodashbordComponent', () => {
  let component: PodashbordComponent;
  let fixture: ComponentFixture<PodashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
