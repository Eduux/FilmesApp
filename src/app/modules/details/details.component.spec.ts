import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailsComponent } from "./details.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderSectionComponent } from "src/app/core/header-section/header-section.component";
import { NoResultsComponent } from "src/app/core/no-results/no-results.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        DetailsComponent,
        HeaderSectionComponent,
        NoResultsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
