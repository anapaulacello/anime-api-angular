import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FantasyService } from 'src/app/pages/fantasy-page/services/fantasy.service';


@Component({
  selector: 'app-fantasy-detail',
  templateUrl: './fantasy-detail.component.html',
  styleUrls: ['./fantasy-detail.component.scss']
})
export class FantasyDetailComponent implements OnInit {
  public anime: any;
  public mal_id:any;
  constructor(public fantasyService: FantasyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
 this.route.paramMap.subscribe((params)=>{
      this.mal_id=params.get("mal_id");
      })
    this.fantasyService.getAllAnimeFantasy().subscribe((element:any)=>{
        console.log(element.anime);
        this.anime=element.anime.find((element:any)=>element.mal_id==this.mal_id)
        console.log(this.anime)
        
  
      })
    
  }

}