import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

import { PostListComponent } from './posts/post-list/post-list.component'
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: 'users', children:[
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailsComponent },
    ]
  },
  { path: 'posts', children:[
      { path: '', component: PostListComponent },
      { path: ':id', component: PostDetailsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
