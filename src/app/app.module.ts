import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { firebaseConfig } from 'src/app/shared/config/firebase.config';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

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
import { SearchComponent } from './shared/module/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/module/loader/loader.component';
import { SroallableDirective } from './shared/derective/sroallable.directive';
import { ScrollLoaderComponent } from './shared/module/scroll-loader/scroll-loader.component';

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
    SearchComponent,
    LoaderComponent,
    SroallableDirective,
    ScrollLoaderComponent,
  ],
  imports: [
    
    // Angular FireBase
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFirestoreModule.enablePersistence(),

    //Material Bootstrap
    MDBBootstrapModule.forRoot(),
    //MDBBootstrapModulesPro.forRoot(),

    BrowserAnimationsModule,
    MatVideoModule,

    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
