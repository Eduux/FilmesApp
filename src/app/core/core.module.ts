import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { HeaderSectionComponent } from "./header-section/header-section.component";
import { NoResultsComponent } from "./no-results/no-results.component";
import { WrapContentComponent } from "./wrap-content/wrap-content.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSectionComponent,
    NoResultsComponent,
    WrapContentComponent
  ],
  exports: [
    HeaderComponent,
    HeaderSectionComponent,
    NoResultsComponent,
    WrapContentComponent
  ],
  imports: [CommonModule]
})
export class CoreModule {}
