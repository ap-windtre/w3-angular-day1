import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertViewComponent } from './components/insert-view/insert-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  { path: 'product' , component: MainViewComponent },
  { path: 'insert' , component: InsertViewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'product' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
