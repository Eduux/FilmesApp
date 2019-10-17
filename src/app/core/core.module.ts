import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { HeaderSectionComponent } from "./header-section/header-section.component";
import { LoadingComponent } from "./loading/loading.component";
import { WrapContentComponent } from "./wrap-content/wrap-content.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSectionComponent,
    LoadingComponent,
    WrapContentComponent
  ],
  exports: [
    HeaderComponent,
    HeaderSectionComponent,
    LoadingComponent,
    WrapContentComponent
  ],
  imports: [CommonModule]
})
export class CoreModule {}
