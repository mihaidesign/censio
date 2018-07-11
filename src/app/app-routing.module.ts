import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { LoginComponent } from './login/login.component'
import { AdminComponent } from './admin/admin.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth.guard'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
