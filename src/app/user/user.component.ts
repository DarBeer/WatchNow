import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loading: boolean = false;

  public pages: string[][] = [
    ['HOME', '/home'],
    ['GENRES', '/list-of-genres']
  ];

  constructor() { }

  ngOnInit() {
  }

}
