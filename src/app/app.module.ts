import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Pages
import { MainPageComponent } from './pages/main-page/main-page.component';
import { VotePageComponent } from './pages/vote-page/vote-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { S404PageComponent } from './pages/s404-page/s404-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    VotePageComponent,
    CreatePageComponent,
    ResultsPageComponent,
    S404PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
