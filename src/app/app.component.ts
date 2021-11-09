import { Component } from '@angular/core';
import { NavModels, Items } from './core/models/nav-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigation:NavModels={
    item:[
    {
      name: "HOME",
      link: "/home",
      icon:'https://imgur.com/Hp1mkJl.png'
    },
    {
      name: "TOP 50",
      link: "/top",
      icon:'https://imgur.com/6yXFHc6.png'
    },
    {
      name: "Fantasy",
      link: "/fantasy",
      icon:'https://imgur.com/wdsT9oL.png'
    },
    {
      name: "ABOUT",
      link: "/about",
      icon:'https://imgur.com/INQ96Cp.png'
    }
  ]

}

public isOpenNavbar = false;

public showNavbar () {
  this.isOpenNavbar = !this.isOpenNavbar;
}

}
