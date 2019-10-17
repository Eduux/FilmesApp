import { Component, Input } from "@angular/core";
import { Film } from "src/app/interfaces/film";

@Component({
  selector: "app-film-details",
  templateUrl: "./film-details.component.html",
  styleUrls: ["./film-details.component.scss"]
})
export class FilmDetailsComponent {
  @Input() public film: Film;
}
