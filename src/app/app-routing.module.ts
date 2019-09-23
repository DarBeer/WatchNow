import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { MoviesComponent } from './web/movies/movies.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AuthenticationComponent } from './user-dash-board/authentication/authentication.component';
import { LogInComponent } from './modules/authentication/log-in/log-in.component';
import { SignUpComponent } from './modules/authentication/sign-up/sign-up.component';
import { DashBoardComponent } from './user-dash-board/dash-board/dash-board.component';
import { ProfileComponent } from './user-dash-board/dash-board/profile/profile.component';
import { FavoriteMoviesComponent } from './user-dash-board/dash-board/favorite-movies/favorite-movies.component';
import { PageComponent } from './web/movies/page/page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'film/:id', component: PageComponent },
  { path: 'profile', component: UserDashBoardComponent, children: [
    { path: ':id', component: DashBoardComponent, children: [
      { path: '', component: ProfileComponent },
      { path: 'favorite', component: FavoriteMoviesComponent }
    ]},
    { path: 'authentication', component: AuthenticationComponent, children: [
      { path: 'sign-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
