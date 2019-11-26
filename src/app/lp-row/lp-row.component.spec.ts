import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LpRowComponent } from "./lp-row.component";

describe("LpRowComponent", () => {
  let component: LpRowComponent;
  let fixture: ComponentFixture<LpRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LpRowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
