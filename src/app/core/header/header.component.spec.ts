import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should trigger the navigation to `/`", async(() => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");
    component.goHome();
    expect(spy).toHaveBeenCalledWith(["/"]);
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
