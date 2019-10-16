import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "src/app/core/header/header.component";
import { WrapContentComponent } from "src/app/core/wrap-content/wrap-content.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, WrapContentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
