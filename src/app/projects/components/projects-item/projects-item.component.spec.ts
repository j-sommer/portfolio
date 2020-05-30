import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ResolutionService } from "core/services/resolution-service/resolution.service";

import { ProjectsItemComponent } from "./projects-item.component";
import { MatChipsModule } from "@angular/material/chips";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";

describe("ProjectsItemComponent", () => {
  let component: ProjectsItemComponent;
  let fixture: ComponentFixture<ProjectsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsItemComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        TranslateModule.forRoot(),
      ],
      providers: [ResolutionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
