import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home", loadChildren: () => import("./pages/home-page/home-page-routing.module").then(m => m.HomePageRoutingModule)
  },
  {
    path: "about", loadChildren: () => import("./pages/about-page/about-page-routing.module").then(m => m.AboutPageRoutingModule)
  },
  {
    path: "top", loadChildren: () => import("./pages/top-page/top-page-routing.module").then(m => m.TopPageRoutingModule)
  },
  {
    path: "fantasy", loadChildren: () => import("./pages/fantasy-page/fantasy-page-routing.module").then(m => m.FantasyPageRoutingModule)
  },
  {path:"fantasy/:mal_id", loadChildren: () => import("./pages/fantasy-datail/fantasy-datail-routing.module").then(m => m.FantasyDatailRoutingModule)
  },

  { path: ``, redirectTo: `home`, pathMatch: `full` }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
