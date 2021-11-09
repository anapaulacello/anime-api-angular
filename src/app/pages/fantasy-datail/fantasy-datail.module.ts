import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FantasyDatailRoutingModule } from './fantasy-datail-routing.module';
import { FantasyDetailComponent } from './components/fantasy-detail/fantasy-detail.component';


@NgModule({
  declarations: [
    FantasyDetailComponent
  ],
  imports: [
    CommonModule,
    FantasyDatailRoutingModule
  ]
})
export class FantasyDatailModule { }
