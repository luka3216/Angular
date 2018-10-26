import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'books'
    }, {
      path: 'books',
      loadChildren: './routes/books/books.module#BooksModle'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
