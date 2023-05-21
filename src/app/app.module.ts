import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { BookSearchComponent } from './components/book-searcher/book-searcher.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthorComponent } from './components/author/author.component';


let routes: Routes = [
  {path: "book-searcher", component: BookSearchComponent},
  {path: "author/:authorKey", component: AuthorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
