import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'

import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LoginComponent } from './login/login.component'
import { AdminComponent } from './admin/admin.component'
import { HomeComponent } from './home/home.component'
import { AuthService } from './auth.service'
import { UserService } from './user.service'
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewsComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, UserService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
