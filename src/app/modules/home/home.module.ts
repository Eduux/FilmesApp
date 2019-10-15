import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { WrapContentComponent } from "src/app/core/wrap-content/wrap-content.component";
import { NoResultsComponent } from "src/app/core/no-results/no-results.component";
import { FilmItemComponent } from "src/app/modules/home/film-item/film-item.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderSectionComponent,
    WrapContentComponent,
    NoResultsComponent,
    FilmItemComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
