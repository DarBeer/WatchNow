import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';
import { Film } from "../../data/film";
import { PaginationService } from '../../service/pagination.service';

@Component({
  selector: 'app-list-film-details',
  templateUrl: './list-film-details.component.html',
  styleUrls: ['./list-film-details.component.scss']
})
export class ListFilmDetailsComponent implements OnInit {

  placehold = "../../../../assets/img/oops.png";
  films: Film[];
  size: number = 18;

  constructor(private filmService: FilmService) {
    
  }

  ngOnInit() {
    this.filmService.getFilms(this.size)
      .subscribe(ref => {
        this.films = ref;
      });
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.size += 9;
      this.filmService.getFilms(this.size)
        .subscribe(ref => {
          this.films = ref;
        });
    }
  }

}
