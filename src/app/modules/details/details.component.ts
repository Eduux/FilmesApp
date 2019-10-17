import { Component, OnInit } from "@angular/core";
import { Film } from "src/app/interfaces/film";
import { FilmsService } from "src/app/services/films.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  id: number;
  film: Film;
  error: Boolean = false;

  constructor(
    private filmService: FilmsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
    });
  }

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    this.filmService.getById(this.id).subscribe(
      film => {
        this.film = film;
      },
      err => {
        this.router.navigate(["/"]);
      }
    );
  }
}
