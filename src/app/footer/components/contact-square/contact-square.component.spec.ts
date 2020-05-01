import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MockModule } from "ng-mocks";

import { ContactSquareComponent } from "./contact-square.component";

describe("ContactSquareComponent", () => {
  let component: ContactSquareComponent;
  let fixture: ComponentFixture<ContactSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSquareComponent],
      imports: [MockModule(FontAwesomeModule), NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
