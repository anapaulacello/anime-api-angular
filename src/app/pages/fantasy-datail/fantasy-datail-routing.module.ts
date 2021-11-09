import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantasyDetailComponent } from './components/fantasy-detail/fantasy-detail.component';

const routes: Routes = [ {path: "", component: FantasyDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FantasyDatailRoutingModule { }
