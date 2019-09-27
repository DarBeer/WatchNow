import { Component, OnInit}           from '@angular/core';
import { FilmService }                from 'src/app/shared/service/film.service';

import { map }                        from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: any;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getFilmsList();
  }

  getFilmsList() {
    this.filmService.getList().snapshotChanges().pipe(
      map(changes => 
        changes.map(f => 
          ({ id: f.payload.doc.id, ...f.payload.doc.data() })
        )
      )
    ).subscribe(films => {
      this.films = films;
    })
  }

}
