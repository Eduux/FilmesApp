import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FilmItemComponent } from "./film-item.component";

import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe("FilmItemComponent", () => {
  let component: FilmItemComponent;
  let fixture: ComponentFixture<FilmItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmItemComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should trigger the navigation to `/details/:id`", async(() => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");
    component.openDetails("https://swapi.co/api/films/1/");
    expect(spy).toHaveBeenCalledWith(["/detail", 1]);
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
