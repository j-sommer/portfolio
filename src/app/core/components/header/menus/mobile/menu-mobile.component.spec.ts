import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { MenuMobileComponent } from "./menu-mobile.component";
import { TranslateModule } from "@ngx-translate/core";

describe("MenuMobileComponent", () => {
  let component: MenuMobileComponent;

  describe("With Template", () => {
    let fixture: ComponentFixture<MenuMobileComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MenuMobileComponent],
        imports: [
          RouterTestingModule,
          MockModule(MatButtonModule),
          MockModule(MatIconModule),
          MockModule(MatMenuModule),
          TranslateModule.forRoot(),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(MenuMobileComponent);
      component = fixture.componentInstance;
    });

    it("should exist", () => {
      expect(component).toBeTruthy();
    });
  });
});
