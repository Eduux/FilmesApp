import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing.module";

import { HomeComponent } from "./home.component";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { NoResultsComponent } from "src/app/core/no-results/no-results.component";
import { FilmItemComponent } from "src/app/modules/home/film-item/film-item.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderSectionComponent,
    NoResultsComponent,
    FilmItemComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
