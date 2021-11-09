
import { Component, OnInit } from '@angular/core';
import { FantasyService } from 'src/app/pages/fantasy-page/services/fantasy.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public gojou:any;
public sukuna:any;
public tomioka:any;

  constructor(private favoriteSrvice:FantasyService) { }

  ngOnInit(): void {
    this.favoriteSrvice.getGojou().subscribe((element)=>{
      console.log(element)
      this.gojou=element;
      
    }) 
    this.favoriteSrvice.getSukuna().subscribe((element)=>{
      console.log(element)
      this.sukuna=element;
      
    }) 
    this.favoriteSrvice.getTomioke().subscribe((element)=>{
      console.log(element)
      this.tomioka=element;
      
    }) 
  }

}
