import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BooksComponent } from './books.component';

const routes: Routes = [{
  path: '',
  component: BooksComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: ListComponent
  }, {
    path: 'book',
    component: BookComponent
  }, {
    path: 'book/:bookId',
    component: BookComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
