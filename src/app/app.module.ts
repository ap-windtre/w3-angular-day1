import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { InsertViewComponent } from './components/insert-view/insert-view.component';
import { ListComponent } from './components/main-view/list/list.component';
import { ListItemComponent } from './components/main-view/list/list-item/list-item.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SearchItemComponent } from './components/main-view/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
    InsertViewComponent,
    ListComponent,
    ListItemComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
