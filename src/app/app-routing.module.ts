import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './users/login/login.component'
import {SignupComponent} from './users/signup/signup.component'
import {PageNotFoundComponent} from './users/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
