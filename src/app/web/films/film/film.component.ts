import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FilmService } from 'src/app/shared/service/film.service';
import { Film } from "src/app/shared/data/film";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filmService.getFilm(params['id']).subscribe(res => {
        this.film = res;
      })
    });
  }

}
