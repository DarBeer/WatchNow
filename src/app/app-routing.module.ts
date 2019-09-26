import {  NgModule }                  from '@angular/core';
import {  Routes, 
          RouterModule, 
        }                             from '@angular/router';

import {  UserComponent   }           from './user/user.component';
import {  HomeComponent   }           from './user/home/home.component';
import {  ListOfGenresComponent   }   from './user/list-of-genres/list-of-genres.component';
import {  ListOfFilmsComponent  }     from './user/list-of-films/list-of-films.component';
import {  FilmComponent   }           from './user/list-of-films/film/film.component';


const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'list-of-genres', component: ListOfGenresComponent },
    { path: 'list-of-films', component: ListOfFilmsComponent },
    { path: 'films/:id', component: FilmComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
