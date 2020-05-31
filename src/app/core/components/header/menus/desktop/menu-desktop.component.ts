import { Component, Input } from "@angular/core";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { Section } from "shared/models/enums/section.enum";
import { LanguageService } from "shared/services/language/language.service";

import { MenuComponent } from "../menu.component";

@Component({
  selector: "app-menu-desktop",
  templateUrl: "menu-desktop.component.html",
  styleUrls: ["./menu-desktop.component.scss"],
})
export class MenuDesktopComponent extends MenuComponent {
  @Input() public sectionSet: Set<Section>;

  constructor(
    protected languageService: LanguageService,
    protected scrollService: ScrollService
  ) {
    super(languageService, scrollService);
  }
}
