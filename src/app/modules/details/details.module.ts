import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsRoutingModule } from "./detals.routing.module";
import { CoreModule } from "src/app/core/core.module";

import { DetailsComponent } from "./details.component";
import { FilmDetailsComponent } from "./film-details/film-details.component";

@NgModule({
  declarations: [DetailsComponent, FilmDetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, CoreModule]
})
export class DetailsModule {}
