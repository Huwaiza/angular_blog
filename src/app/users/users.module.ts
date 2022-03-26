import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersRoutingModule } from './users-routing.module'

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UsersModule { }
