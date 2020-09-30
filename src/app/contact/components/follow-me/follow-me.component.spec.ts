import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { By } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { MockComponent, MockModule } from "ng-mocks";

import { ContactProvider } from "../../models/contact-provider";
import { ContactSquareComponent } from "../contact-square/contact-square.component";
import { FollowMeComponent } from "./follow-me.component";

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

  it.each([
    [ContactProvider.CodePen],
    [ContactProvider.GitHub],
    [ContactProvider.LinkedIn],
    [ContactProvider.Medium],
    [ContactProvider.Twitter],
  ])(
    "should contain a <app-contact-square> component for %s",
    (expectedProvider: ContactProvider) => {
      // When
      const contactSquareElements = fixture.debugElement.queryAll(
        By.css("app-contact-square")
      );

      // Then
      contactSquareElements.some((element) => {
        const instance: ContactSquareComponent = element.componentInstance;
        return instance.contactProvider === expectedProvider;
      });
    }
  );
});
