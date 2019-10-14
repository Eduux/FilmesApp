import { Component, OnInit } from "@angular/core";
import { FilmsService } from "src/app/services/films.service";
import { Film } from "src/app/interfaces/film";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  films: Array<Film>;

  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.filmService.getAll().subscribe(films => {
      this.films = films;
    });
  }
}
