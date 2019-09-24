import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Film } from 'src/app/shared/film.model';

import * as _ from "lodash";
import { switchMap, switchMapTo } from 'rxjs/operators';
import { FilmService } from 'src/app/shared/film.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  private id: string;
  tableData: any[] = [];

  private errorMessage: string;

  constructor(private service: FilmService, private route: ActivatedRoute, private location: Location, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getFilm(params['id']);
      }
    )
  }

  getFilm(id: string){
    this.firestore.collection('films', ref => ref
      .limit(6)
      .where('id', '==', id)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
 
        this.tableData = [];
        for (let item of response) {
          this.tableData.push(item.payload.doc.data());
        }

        console.log(this.tableData);
      }, error => {
      });
  }

}
