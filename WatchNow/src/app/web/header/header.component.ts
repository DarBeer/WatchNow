import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public auth: boolean = false;
  public address: string;

  constructor() { }

  ngOnInit() {
  }

}
