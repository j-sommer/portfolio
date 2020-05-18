import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { MockComponent } from "ng-mocks";

import { ProjectsItemComponent } from "../projects-item/projects-item.component";
import { SectionComponent } from "./section.component";

describe("SectionComponent", () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent, MockComponent(ProjectsItemComponent)],
      imports: [TranslateModule.forRoot()],
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

  it("should contain a h1 header when created", () => {
    // Given
    const expectedContent = "projects.header";

    // When
    const headerElement = fixture.debugElement.query(By.css("h1"));

    // Then
    expect(headerElement).toBeTruthy();
    expect(headerElement.nativeElement.textContent).toContain(expectedContent);
  });
});
