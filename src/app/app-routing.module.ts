import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'
import { ReviewsComponent } from './reviews/reviews.component'

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
