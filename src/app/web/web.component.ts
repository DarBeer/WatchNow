import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  loading: boolean = false;

  copyright: string = null;

  public pages: string[][] = [
    ['HOME', '/home'],
    ['FILMS', '/films'],
    ['GENRES', '/genres']
  ];

  constructor() {
    this.copyright = Date.now().toString();
  }

  ngOnInit() {
  }

}
