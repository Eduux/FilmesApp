import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';
import { Films } from '../interfaces/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  urlService = 'films';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Films> {
    return this.http.get<Films>(`${api.baseUrl}/${this.urlService}/`);
  }

  getById(id: number) {
    return this.http.get<Film>(`${api.baseUrl}/${this.urlService}/${id}`);
  }
}
