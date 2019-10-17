import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing.module";
import { CoreModule } from "src/app/core/core.module";

import { HomeComponent } from "./home.component";
import { FilmItemComponent } from "src/app/modules/home/film-item/film-item.component";

@NgModule({
  declarations: [HomeComponent, FilmItemComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule]
})
export class HomeModule {}
