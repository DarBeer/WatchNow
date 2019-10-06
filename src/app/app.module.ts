import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firebaseConfig } from 'src/app/shared/config/firebase.config';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './web/home/home.component';
import { FilmsComponent } from './web/films/films.component';
import { FilmComponent } from './web/films/film/film.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './user/edit/edit.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserAuthorizateComponent } from './user-authorizate/user-authorizate.component';
import { GenresComponent } from './web/genres/genres.component';
import { ListFilmDetailsComponent } from './shared/module/list-film-details/list-film-details.component';
import { FilmDetailsComponent } from './shared/module/list-film-details/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HomeComponent,
    FilmsComponent,
    FilmComponent,
    NotFoundComponent,
    UserComponent,
    EditComponent,
    FavoriteComponent,
    ProfileComponent,
    UserAuthorizateComponent,
    GenresComponent,
    ListFilmDetailsComponent,
    FilmDetailsComponent
  ],
  imports: [
    // Angular FireBase
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFirestoreModule.enablePersistence(),

    //Material Bootstrap
    MDBBootstrapModule.forRoot(),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
