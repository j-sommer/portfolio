import { Component, Input } from "@angular/core";
import { Section } from "shared/models/enums/section.enum";
import { LanguageService } from "shared/services/language/language.service";

import { MenuComponent } from "../menu.component";

@Component({
  selector: "app-menu-mobile",
  templateUrl: "menu-mobile.component.html",
  styleUrls: ["./menu-mobile.component.scss"],
})
export class MenuMobileComponent extends MenuComponent {
  @Input() public sectionSet: Set<Section>;

  constructor(protected languageService: LanguageService) {
    super(languageService);
  }
}
