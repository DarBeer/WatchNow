// Modules
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule}   from '@angular/material/progress-spinner';
import { MDBBootstrapModule }       from 'angular-bootstrap-md';
import { HTTP_INTERCEPTORS }        from '@angular/common/http';

// Firebase Modules
import { AngularFireModule }        from '@angular/fire';
import { AngularFirestoreModule,
         FirestoreSettingsToken }   from '@angular/fire/firestore';

// Kyes
import { firebaseKey }              from './shared/keys/firebase.key';

// Routing
import { AppRoutingModule }         from './app-routing.module';

// Interceptors
import { LoadingScreenInterceptor } from './shared/interceptors/loading.interceptor';

// Pages
import { AppComponent }             from './app.component';
import { UserComponent }            from './user/user.component';
import { AdminComponent }           from './admin/admin.component';
import { HomeComponent }            from './user/home/home.component';
import { SeachModuleComponent }     from './user/seach-module/seach-module.component';
import { ListOfGenresComponent }    from './user/list-of-genres/list-of-genres.component';
import { ListOfFilmsComponent }     from './user/list-of-films/list-of-films.component';
import { FilmComponent }            from './user/list-of-films/film/film.component';
import { PreloaderComponent }       from './shared/modules/preloader/preloader.component';
import { FilmDetailsComponent }     from './shared/modules/film-details/film-details.component';



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
    // Animation
    MatProgressSpinnerModule,
    AngularFirestoreModule,

    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseKey.firebaseConfig),
    BrowserAnimationsModule,    
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
