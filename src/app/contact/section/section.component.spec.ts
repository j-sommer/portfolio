import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MockComponent } from "ng-mocks";

import { ContactFormComponent } from "../contact-form/contact-form.component";
import { SectionComponent } from "./section.component";

describe("SectionComponent", () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent, MockComponent(ContactFormComponent)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
