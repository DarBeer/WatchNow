import { Component, OnInit } from '@angular/core';
import { Film } from "src/app/shared/data/film";
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/shared/service/film.service';
import { DocumentChangeAction, DocumentData } from '@angular/fire/firestore';
import { repeat } from 'rxjs/operators';
import { Metadata } from 'src/app/shared/data/metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: Film[];
  metadate: Metadata[];

  constructor(private filmService: FilmService) {
    this.filmService.getFilms()
      .subscribe(ref => {
        this.films = ref;
        });
  }

  ngOnInit() {
    
  }

}
