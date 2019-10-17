import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingComponent } from "./loading.component";

describe("NoResultsComponent", () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should instantiate", () => {
    expect(component).toBeDefined();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});