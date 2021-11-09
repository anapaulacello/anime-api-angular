import { FantasyModel } from './../../models/fantasy-model';
import { FantasyService } from './../../services/fantasy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss']
})
export class FantasyComponent implements OnInit {
public fantasyList?:FantasyModel[];
public apiAnime?:FantasyModel;

  constructor(private fantasySrvice:FantasyService) {
   }



  ngOnInit(): void {
    this.fantasySrvice.getAllAnimeFantasy().subscribe((element:any)=>{
      const apiResults:FantasyModel[]=element.anime;
      console.log(apiResults)
      const formattedResults=apiResults.map(({title,image_url,mal_id})=>({
        title,
        image_url,
        mal_id
      }));
      this.fantasyList=formattedResults;
    })
  }

}
