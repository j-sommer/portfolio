import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { MockComponents } from "ng-mocks";

import { AppComponent } from "./app.component";
import { ContactModule } from "./contact/contact.module";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./footer/footer.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(HeaderComponent, FooterComponent),
      ],
      imports: [RouterTestingModule, ContactModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
