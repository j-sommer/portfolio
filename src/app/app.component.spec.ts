import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockComponents } from "ng-mocks";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./footer/footer.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(HeaderComponent, FooterComponent),
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
