import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsRoutingModule } from "./datils.routing.module";

import { DetailsComponent } from "./details.component";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, CoreModule]
})
export class DetailsModule {}
