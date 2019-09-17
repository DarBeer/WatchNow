import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
 
  constructor(
    private firestore: AngularFirestore, 
  ) {
  }
 
  ngOnInit() {
  }
 
}
