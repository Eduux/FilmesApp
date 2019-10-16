import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { WrapContentComponent } from "src/app/core/wrap-content/wrap-content.component";
import { NoResultsComponent } from "src/app/core/no-results/no-results.component";
import { FilmItemComponent } from "./film-item/film-item.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        HomeComponent,
        HeaderSectionComponent,
        NoResultsComponent,
        FilmItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should load header section", () => {
    const fixture = TestBed.createComponent(HeaderSectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load no results", () => {
    const fixture = TestBed.createComponent(NoResultsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load Film Item", () => {
    const fixture = TestBed.createComponent(FilmItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
