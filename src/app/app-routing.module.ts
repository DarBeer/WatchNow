import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './web/home/home.component';
import { FilmsComponent } from './web/films/films.component';
import { FilmComponent } from './web/films/film/film.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { EditComponent } from './user/edit/edit.component';
import { UserAuthorizateComponent } from './user-authorizate/user-authorizate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GenresComponent } from './web/genres/genres.component';


const routes: Routes = [
  { path: '', component: WebComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent },
    { path: 'film/:id', component: FilmComponent },
    { path: 'genres', component: GenresComponent }
  ]},
  { path: 'user/:id', component: UserComponent, children: [
    { path: '', component: ProfileComponent },
    { path: 'likes', component: FavoriteComponent },
    { path: 'edit', component: EditComponent }
  ]},
  { path: 'auth', component: UserAuthorizateComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
