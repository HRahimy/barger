import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseToCurrentDisplayComponent } from './base-to-current-display.component';

describe('BaseToCurrentDisplayComponent', () => {
  let component: BaseToCurrentDisplayComponent;
  let fixture: ComponentFixture<BaseToCurrentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseToCurrentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseToCurrentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
