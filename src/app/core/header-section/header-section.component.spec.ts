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
    component.btnback = true;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should call back function on click", async () => {
    const back = spyOn(component, "back");

    let backbtn = fixture.debugElement.nativeElement.querySelector(".btnback");
    backbtn.click();

    expect(back).toHaveBeenCalled();
  });

  it("should call back()", async () => {
    expect(component.back()).toBeTruthy();
  });

  it("should call back function", async () => {
    const back = spyOn(component, "back");

    component.back();

    expect(back).toHaveBeenCalled();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
