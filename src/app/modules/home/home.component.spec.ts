import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { WrapContentComponent } from "src/app/core/wrap-content/wrap-content.component";
import { NoResultsComponent } from "src/app/core/no-results/no-results.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        HomeComponent,
        HeaderSectionComponent,
        WrapContentComponent,
        NoResultsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should load header section", () => {
    const fixture = TestBed.createComponent(HeaderSectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load wrap content", () => {
    const fixture = TestBed.createComponent(WrapContentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should load no results", () => {
    const fixture = TestBed.createComponent(NoResultsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
