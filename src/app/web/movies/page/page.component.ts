import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Film } from 'src/app/shared/film.model';

import { switchMap } from 'rxjs/operators';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  private id: string;
  film: any;

  private errorMessage: string;

  constructor(private service: FilmService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
      },
      error => this.errorMessage = error
    );
    this.service.getFilm(this.id);
    this.film = this.service.item;
  }
}
