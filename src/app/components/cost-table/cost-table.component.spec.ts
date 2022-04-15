import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostTableComponent } from './cost-table.component';

describe('CostTableComponent', () => {
  let component: CostTableComponent;
  let fixture: ComponentFixture<CostTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
