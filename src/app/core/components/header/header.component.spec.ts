import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { ResolutionService } from "core/services/resolution-service/resolution.service";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { MockComponents, MockModule } from "ng-mocks";

import { HeaderComponent } from "./header.component";
import { MenuDesktopComponent } from "./menus/desktop/menu-desktop.component";
import { MenuMobileComponent } from "./menus/mobile/menu-mobile.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MockComponents(MenuMobileComponent, MenuDesktopComponent),
      ],
      imports: [
        RouterTestingModule,
        MockModule(MatToolbarModule),
        MockModule(MatMenuModule),
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
        TranslateModule.forRoot(),
      ],
      providers: [ScrollService, ResolutionService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain a toolbar when created", () => {
    // When
    const toolbarElement = fixture.debugElement.query(By.css("mat-toolbar"));

    // Then
    expect(toolbarElement).toBeTruthy();
  });
});
