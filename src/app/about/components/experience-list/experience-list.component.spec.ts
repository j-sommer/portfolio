import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatListModule } from "@angular/material/list";
import { MockComponents, MockModule } from "ng-mocks";

import { ExperienceItemComponent } from "../experience-item/experience-item.component";
import { ExperienceListComponent } from "./experience-list.component";

describe("ExperienceListComponent", () => {
  let component: ExperienceListComponent;
  let fixture: ComponentFixture<ExperienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExperienceListComponent,
        MockComponents(ExperienceItemComponent),
      ],
      imports: [MockModule(MatListModule)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
