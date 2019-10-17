import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailsComponent } from "./details.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { LoadingComponent } from "src/app/core/loading/loading.component";
import { RouterTestingModule } from "@angular/router/testing";
import { FilmDetailsComponent } from "./film-details/film-details.component";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        DetailsComponent,
        FilmDetailsComponent,
        HeaderSectionComponent,
        LoadingComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
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

  it("should load Film Details", () => {
    const fixture = TestBed.createComponent(FilmDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should call getFilm function", async done => {
    let getFilm = spyOn(component, "getFilm");
    component.ngOnInit();
    expect(getFilm).toHaveBeenCalled();
    done();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
