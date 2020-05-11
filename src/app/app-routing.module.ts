import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { VotePageComponent } from './pages/vote-page/vote-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { S404PageComponent } from './pages/s404-page/s404-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'vote/:id', component: VotePageComponent },
  { path: 'results/:id', component: ResultsPageComponent },
  { path: '**', component: S404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
