import { Injectable } from "@angular/core";
import { api } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../interfaces/film";

@Injectable({
  providedIn: "root"
})
export class FilmsService {
  urlService: String = "films";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${api.baseUrl}/${this.urlService}/`);
  }

  getById(id: number) {
    return this.http.get<Film>(`${api.baseUrl}/${this.urlService}/${id}`);
  }
}
