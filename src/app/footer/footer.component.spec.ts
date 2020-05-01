import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatGridListModule } from "@angular/material/grid-list";
import { MockComponent, MockModule } from "ng-mocks";

import { ContactSquareComponent } from "./components/contact-square/contact-square.component";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, MockComponent(ContactSquareComponent)],
      imports: [MockModule(MatGridListModule)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
