import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Film } from './film.model';
import { switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  film: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
  }
 
}
