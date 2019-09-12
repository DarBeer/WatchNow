import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/film.model'
import { FilmService } from 'src/app/shared/film.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  list: Film[];

  constructor(private service: FilmService) { }

  ngOnInit() {
    this.service.getFilms().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Film;
      })
    });
  }

}
