import { TopModel } from './../../models/top.models';
import { Component, OnInit } from '@angular/core';
import { FantasyService } from 'src/app/pages/fantasy-page/services/fantasy.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
public topList?:TopModel[];
  constructor(private topSrvice:FantasyService) { }

  ngOnInit(): void {
    this.topSrvice.getTop().subscribe((element:any)=>{
      const apiResults:TopModel[]=element.top;
      const formattedResults=apiResults.map(({rank,title,image_url,type})=>({
        rank,
        title,
        image_url,
        type
      }));
      this.topList=formattedResults;
      console.log(this.topList);
    })
  }

}
