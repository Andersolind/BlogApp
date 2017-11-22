import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostsComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      {
        path: 'post',
        component: PostsComponent,
        outlet: 'firstchild'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
