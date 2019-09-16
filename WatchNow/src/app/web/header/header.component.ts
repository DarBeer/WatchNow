import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public auth: boolean = false;
  public pages: string[][] = [
    ['HOME', 'home'],
    ['MOVIES', 'movies'],
    ['SING IN', 'profile/authentication/sign-in']
  ];

  constructor() { }

  ngOnInit() {
  }

}
