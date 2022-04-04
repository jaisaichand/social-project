import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit,OnChanges {

  constructor() { }

  @Input() commentid:String=null;

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
console.log(changes);

  }

}
