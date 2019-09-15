import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { MoviesComponent } from './web/movies/movies.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AuthenticationComponent } from './user-dash-board/authentication/authentication.component';
import { LogInComponent } from './modules/authentication/log-in/log-in.component';
import { SignUpComponent } from './modules/authentication/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'profile', component: UserDashBoardComponent, children: [
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
