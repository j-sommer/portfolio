import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MockModule } from "ng-mocks";

import { LegalNoticeComponent } from "./legal-notice.component";

describe("LegalNoticeComponent", () => {
  let component: LegalNoticeComponent;
  let fixture: ComponentFixture<LegalNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegalNoticeComponent],
      imports: [MockModule(MatCardModule), MockModule(MatGridListModule)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
