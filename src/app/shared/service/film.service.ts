import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentSnapshot, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from "../data/Film";
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private itemCollection: AngularFirestoreCollection<Film>;

  constructor(private angularFirestore: AngularFirestore) {
    
  }

  public getFilms() : Observable<Film[]> {
    this.itemCollection = this.angularFirestore.collection<Film>('films', res => res.limit(9).orderBy('added_at', 'desc'));
    return this.itemCollection.valueChanges();
  } 

}
