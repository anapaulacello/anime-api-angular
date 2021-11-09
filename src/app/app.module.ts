import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './pages/top-page/components/top/top.component';
import { FantasyComponent } from './pages/fantasy-page/components/fantasy/fantasy.component';
import { HttpClientModule } from '@angular/common/http';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
  //return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FantasyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
