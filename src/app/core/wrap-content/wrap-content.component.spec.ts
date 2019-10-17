import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapContentComponent } from './wrap-content.component';

describe('WrapContentComponent', () => {
  let component: WrapContentComponent;
  let fixture: ComponentFixture<WrapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
