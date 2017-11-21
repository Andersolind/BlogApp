import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortByPipe } from './pipe/sort-by.pipe';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, DashboardComponent, TodoListComponent, FilterPipe, SortByPipe, PostsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
