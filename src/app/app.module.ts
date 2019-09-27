// Modules
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { MDBBootstrapModule }     from 'angular-bootstrap-md';

// Firebase Modules
import { AngularFireModule }      from '@angular/fire';
import { AngularFirestoreModule,
         FirestoreSettingsToken } from '@angular/fire/firestore';

// Routing
import { AppRoutingModule }       from './app-routing.module';

// Pages
import { AppComponent }           from './app.component';
import { UserComponent }          from './user/user.component';
import { AdminComponent }         from './admin/admin.component';
import { HomeComponent }          from './user/home/home.component';
import { SeachModuleComponent }   from './user/seach-module/seach-module.component';
import { ListOfGenresComponent }  from './user/list-of-genres/list-of-genres.component';
import { ListOfFilmsComponent }   from './user/list-of-films/list-of-films.component';
import { FilmComponent }          from './user/list-of-films/film/film.component';
import { PreloaderComponent } from './shared/modules/preloader/preloader.component';
import { environment } from 'src/environments/environment';
import { FilmDetailsComponent } from './shared/modules/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    SeachModuleComponent,
    ListOfGenresComponent,
    ListOfFilmsComponent,
    FilmComponent,
    PreloaderComponent,
    FilmDetailsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
