import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MockComponent, MockModule } from "ng-mocks";

import { ContactSquareComponent } from "../contact-square/contact-square.component";
import { FollowMeComponent } from "./follow-me.component";
import { TranslateModule } from "@ngx-translate/core";

describe("FollowMeComponent", () => {
  let component: FollowMeComponent;
  let fixture: ComponentFixture<FollowMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FollowMeComponent, MockComponent(ContactSquareComponent)],
      imports: [
        MockModule(MatTooltipModule),
        MockModule(MatGridListModule),
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
