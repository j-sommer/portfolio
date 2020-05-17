import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatListModule } from "@angular/material/list";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MockModule } from "ng-mocks";

import { ExperienceItemComponent } from "./experience-item.component";

describe("ExperienceItemComponent", () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceItemComponent],
      imports: [MockModule(FontAwesomeModule), MockModule(MatListModule)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
