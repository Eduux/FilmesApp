import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from "./home.component";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { LoadingComponent } from "src/app/core/loading/loading.component";
import { FilmItemComponent } from "./film-item/film-item.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        HomeComponent,
        HeaderSectionComponent,
        LoadingComponent,
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

  it("should load loading", () => {
    const fixture = TestBed.createComponent(LoadingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load Film Item", () => {
    const fixture = TestBed.createComponent(FilmItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should call getFilms function", async done => {
    let getFilms = spyOn(component, "getFilms");
    component.ngOnInit();
    expect(getFilms).toHaveBeenCalled();
    done();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
