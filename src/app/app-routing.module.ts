import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertViewComponent } from './components/insert-view/insert-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { BindingTestComponent } from './components/examples/binding-test/binding-test.component';
import { CounterComponent } from './components/examples/counter/counter.component';
import { DirettiveComponent } from './components/examples/direttive/direttive.component';
import { FantacalcioComponent } from './components/examples/fantacalcio/fantacalcio.component';

const routes: Routes = [
  { path: 'product' , component: MainViewComponent },
  { path: 'insert' , component: InsertViewComponent },
  {
    path: 'examples' , component: ExamplesViewComponent,
    children: [
      { path: 'binding', component: BindingTestComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'direttive', component: DirettiveComponent },
      { path: 'fantacalcio', component: FantacalcioComponent },
      { path: '', pathMatch: 'full', redirectTo: 'binding' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'product' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
