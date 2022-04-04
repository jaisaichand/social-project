import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    
  }
  @Input() postdata;
showCommentBox = false;
  openCommentBox(){
    this.showCommentBox = !this.showCommentBox;
  }

  seeMore=false;

}
