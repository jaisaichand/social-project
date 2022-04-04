import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public main:MainService) { }

  ngOnInit(): void {
    this.getInitial();
  }
  listOfPosts = [];
  getInitial(){
    this.main.getPosts().subscribe((data:any[])=>{
      console.log(data);
      this.listOfPosts = data;
    });
  }

}
