import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderSectionComponent } from "./header-section.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HeaderSectionComponent", () => {
  let component: HeaderSectionComponent;
  let fixture: ComponentFixture<HeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderSectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
