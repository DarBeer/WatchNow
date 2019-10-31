import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from "../data/film";
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public loadDone

  private itemCollection: AngularFirestoreCollection<Film>;

  constructor(private angularFirestore: AngularFirestore) {
    
  }

  public getFilms(num: number) : Observable<Film[]> {
    return this.angularFirestore.collection<Film>('films', res => res.limit(num).orderBy('metadata.release_date', 'desc')).valueChanges();
  }
  
  public serchFilmsByTitle(title: string) : Observable<Film[]> {
    return this.angularFirestore.collection<Film>('films', res => res.where('title', '==', title).orderBy('title')).valueChanges();
  }

  public getFilm(id: number) : Observable<Film> {
    return this.angularFirestore.doc<Film>('films/' + id).valueChanges();
  }

}
