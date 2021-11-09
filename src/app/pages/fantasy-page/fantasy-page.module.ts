import { FantasyService } from './services/fantasy.service';
import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FantasyPageRoutingModule } from './fantasy-page-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FantasyPageRoutingModule
  ],
  providers: [FantasyService]
})
export class FantasyPageModule { }
