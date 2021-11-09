
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {
  public animeURL:string="https://api.jikan.moe/v3/";
  public fantasyURL:string=`${this.animeURL}genre/anime/10`;
 public topURL:string=`${this.animeURL}top/anime/1/upcoming`;

 public gojouURL:string=`${this.animeURL}character/164471`;
 public sukunaURL:string=`${this.animeURL}character/175198`;
 public tomiokeURL:string=`${this.animeURL}character/146735`;

  constructor(private httpClient:HttpClient) {}

  public getAllAnimeFantasy (){
    return this.httpClient.get(this.fantasyURL)
  }
  
  public getTop(){
    return this.httpClient.get(this.topURL)
  }

  public getGojou(){
    return this.httpClient.get(this.gojouURL)
  }

  public getSukuna(){
    return this.httpClient.get(this.sukunaURL)
  }

  public getTomioke(){
    return this.httpClient.get(this.tomiokeURL)
  }

}
