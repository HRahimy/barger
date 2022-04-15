import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentControlsComponent } from './comment-controls.component';

describe('CommentControlsComponent', () => {
  let component: CommentControlsComponent;
  let fixture: ComponentFixture<CommentControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
