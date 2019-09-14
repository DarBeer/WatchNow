import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/film.model'
import { FilmService } from 'src/app/shared/film.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PaginationService } from 'src/app/shared/pagination.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor(private service: FilmService) { 
    
  }

  ngOnInit() {
  }

}
