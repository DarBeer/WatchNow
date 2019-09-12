import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { HeaderComponent } from './web/header/header.component';
import { FooterComponent } from './web/footer/footer.component';
import { SearchComponent } from './web/header/search/search.component';
import { HomeComponent } from './web/home/home.component';
import { MoviesComponent } from './web/movies/movies.component';
import { FilmComponent } from './web/Movies/film/film.component';
import { environment } from 'src/environments/environment';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { VideoPlayerComponent } from './modules/video-player/video-player.component';
import { MoveListComponent } from './modules/move-list/move-list.component';
import { FilmService } from './shared/film.service';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    MoviesComponent,
    FilmComponent,
    CarouselComponent,
    VideoPlayerComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatVideoModule,
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
