import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { HeaderComponent } from './web/header/header.component';
import { FooterComponent } from './web/footer/footer.component';
import { SearchComponent } from './web/header/search/search.component';
import { HomeComponent } from './web/home/home.component';
import { MoviesComponent } from './web/movies/movies.component';
import { FilmComponent } from './web/Movies/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    MoviesComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
