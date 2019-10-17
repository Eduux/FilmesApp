import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { FilmsService } from './films.service';
import { film } from './filmes.service.mock';

describe('FilmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsService],
      imports: [HttpClientTestingModule]
    });
  });

  function setup() {
    const filmService = TestBed.get(FilmsService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { filmService, httpTestingController };
  }

  it('should call a film', () => {
    const { filmService, httpTestingController } = setup();

    filmService.getById('1').subscribe(res => {
      expect(res).toEqual(film);
    });

    const req = httpTestingController.expectOne('https://swapi.co/api/films/1');
    expect(req.request.method).toBe('GET');
    req.flush(film);
  });

  it('should call all 7 films', () => {
    const { filmService, httpTestingController } = setup();
    filmService.getAll().subscribe(res => {
      expect(res.count).toEqual(7);
    });

    const req = httpTestingController.expectOne('https://swapi.co/api/films/');
    expect(req.request.method).toBe('GET');
  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
  });
});
