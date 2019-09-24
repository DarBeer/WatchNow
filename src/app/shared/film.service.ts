import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Film } from './film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  //Models for Input fields
  nameValue: string;
  placeValue: string;
 
  //Data object for listing items
  tableData: any[] = [];
  item: any;
 
  //Save first document in snapshot of items received
  firstInResponse: any = [];
 
  //Save last document in snapshot of items received
  lastInResponse: any = [];
 
  //Keep the array of first document of previous pages
  prev_strt_at: any = [];
 
  //Maintain the count of clicks on Next Prev button
  pagination_clicked_count = 0;
 
  //Disable next and prev buttons
  disable_next: boolean = false;
  disable_prev: boolean = false;

  constructor(private firestore: AngularFirestore) {}
 
  ngOnInit() {
  }

  getFilm(id: string) {
    this.firestore.collection('films', ref => ref
      .limit(1)
      .where('id', '==', id)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;
 
        this.tableData = [];
        for (let item of response) {
          this.tableData.push(item.payload.doc.data());
        }
        this.item = this.tableData[0];
        console.log(this.item);

        //Initialize values
        this.prev_strt_at = [];
        this.pagination_clicked_count = 0;
        this.disable_next = false;
        this.disable_prev = false;
      }, error => {
      });
  }
 
}
