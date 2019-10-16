import { Component, Input } from "@angular/core";
import { Film } from "src/app/interfaces/film";
import { Router } from "@angular/router";

@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.scss"]
})
export class FilmItemComponent {
  @Input() public film: Film;

  constructor(private router: Router) {}

  openDetails(url) {
    const id = parseInt(url.match(/\d+/g).map(Number));
    this.router.navigate(["/detail", id]);
  }
}
