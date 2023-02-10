import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reddit } from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab162-Reddit';
  myreddit?: Reddit;
  subreddit1: String = "Morkie";
  subreddit2: String = "Mustang";

  constructor(private http:HttpClient) {}

  loadReddit1() {
    this.http.get<Reddit>(`https://www.reddit.com/r/${this.subreddit1}/.json`).subscribe(
      (result:Reddit) => {
        this.myreddit = result;
      }
    );
  }

  loadReddit2() {
    this.http.get<Reddit>(`https://www.reddit.com/r/${this.subreddit2}/.json`).subscribe(
      (result:Reddit) => {
        this.myreddit = result;
      }
    );
  }
}
