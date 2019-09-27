import { Component, OnInit, Input }   from '@angular/core';
import { Film }                       from '../../classes/film/film';
import { FilmService }                from '../../service/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  @Input() film: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

}
