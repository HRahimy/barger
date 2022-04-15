import {Component, Input, OnInit} from '@angular/core';
import {ICostItemComment} from '../../interfaces/cost-item.interface';

@Component({
  selector: 'app-comment-controls',
  templateUrl: './comment-controls.component.html',
  styleUrls: ['./comment-controls.component.css']
})
export class CommentControlsComponent implements OnInit {

  @Input()
  get comments(): ICostItemComment[] {
    throw new Error('Attribute "comments" is required');
  }

  set comments(value: ICostItemComment[]) {
    Object.defineProperty(this, 'comments', {
      value,
      writable: true,
      configurable: true
    });
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
