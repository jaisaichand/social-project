import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  getPosts(){
    let headers = new HttpHeaders().set('Authorization','test');
    return this.http.get('https://jaisai-socialmedia.herokuapp.com/v1/getallposts',{headers:headers});
  }
}
