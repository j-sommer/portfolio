import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollService } from "core/services/scroll.service";
import { MockModule } from "ng-mocks";

import { MenuDesktopComponent } from "./menu-desktop.component";

describe("MenuDesktopComponent", () => {
  let component: MenuDesktopComponent;

  describe("With Template", () => {
    let fixture: ComponentFixture<MenuDesktopComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MenuDesktopComponent],
        imports: [
          RouterTestingModule,
          MockModule(MatButtonModule),
          MockModule(MatIconModule),
          MockModule(MatMenuModule),
          TranslateModule.forRoot(),
        ],
        providers: [ScrollService],
      }).compileComponents();

      fixture = TestBed.createComponent(MenuDesktopComponent);
      component = fixture.componentInstance;
    });

    it("should exist", () => {
      expect(component).toBeTruthy();
    });
  });
});
