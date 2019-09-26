import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { MDBBootstrapModule }     from 'angular-bootstrap-md';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }           from './app.component';
import { UserComponent }          from './user/user.component';
import { AdminComponent }         from './admin/admin.component';
import { HomeComponent }          from './user/home/home.component';
import { SeachModuleComponent }   from './user/seach-module/seach-module.component';
import { ListOfGenresComponent }  from './user/list-of-genres/list-of-genres.component';
import { ListOfFilmsComponent }   from './user/list-of-films/list-of-films.component';
import { FilmComponent }          from './user/list-of-films/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    SeachModuleComponent,
    ListOfGenresComponent,
    ListOfFilmsComponent,
    FilmComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
