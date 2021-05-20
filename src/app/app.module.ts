import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BindingTestComponent } from './components/examples/binding-test/binding-test.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/examples/counter/counter.component';
import { DirettiveComponent } from './components/examples/direttive/direttive.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { InsertViewComponent } from './components/insert-view/insert-view.component';
import { ListComponent } from './components/main-view/list/list.component';
import { ListItemComponent } from './components/main-view/list/list-item/list-item.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SearchItemComponent } from './components/main-view/search-item/search-item.component';
import { FantacalcioComponent } from './components/examples/fantacalcio/fantacalcio.component';
import { FantacalcioService } from './services/fantacalcio.service';
import { ProductService } from './services/product.service';
import { PlayerComponent } from './components/examples/fantacalcio/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingTestComponent,
    CounterComponent,
    DirettiveComponent,
    ExamplesViewComponent,
    FantacalcioComponent,
    HeaderComponent,
    InsertViewComponent,
    ListComponent,
    ListItemComponent,
    MainViewComponent,
    PlayerComponent,
    SearchItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
      FantacalcioService,
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
