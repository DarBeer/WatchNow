import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';
import { Film } from "../../data/film";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private films: Film[];

  title = new FormControl('');

  constructor(private filmService: FilmService) { }

  ngOnInit() {

  }

  onClickSerchButton() {
    this.filmService.serchFilmsByTitle(this.title.value).subscribe(ref => {
      this.films = ref;
      console.dir(this.films);
    });
  }

}
