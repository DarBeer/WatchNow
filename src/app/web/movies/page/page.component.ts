import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getPath();
  }

  getPath() {
    console.log(this.location.path());  
  }
}
