import { Injectable } from '@angular/core';
import { Film } from './film.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  film: Film;
  films: Film;

  constructor(private firestore: AngularFirestore) { }

  getFilms() {
    return this.firestore.collection('films').snapshotChanges();
  }
}
