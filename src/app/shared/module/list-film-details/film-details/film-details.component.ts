import { Component, OnInit, Input } from '@angular/core';
import { Film } from "src/app/shared/data/film";
import { Metadata } from 'src/app/shared/data/metadata';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  @Input() film: Film;

  constructor() {
   }

  ngOnInit() {
  }

}
