import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCostDisplayComponent } from './sub-cost-display.component';

describe('SubCostDisplayComponent', () => {
  let component: SubCostDisplayComponent;
  let fixture: ComponentFixture<SubCostDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCostDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCostDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
