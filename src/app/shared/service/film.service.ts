import { Injectable }                                   from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Film }                                         from '../classes/film/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private databasePath = '/films';

  filmRef: AngularFirestoreCollection<Film> = null;

  constructor(private database: AngularFirestore) {
    this.filmRef = database.collection(this.databasePath, ref => ref.limit(3).orderBy('added_at', 'asc'));
  }

  getList() {
    return this.filmRef;
  }
}
