import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { MockComponents, MockModule } from "ng-mocks";

import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { ContactModule } from "./contact/contact.module";
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeModule } from "./home/home.module";
import { ProjectsModule } from "./projects/projects.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(HeaderComponent, FooterComponent),
      ],
      imports: [
        RouterTestingModule,
        MockModule(ContactModule),
        MockModule(AboutModule),
        MockModule(ProjectsModule),
        MockModule(HomeModule),
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
