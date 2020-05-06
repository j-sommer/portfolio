import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SupportedLanguage } from "shared/models/enums/supported-language.enum";
import { Section } from "shared/models/enums/section.enum";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public readonly SupportedLanguage = SupportedLanguage;
  public readonly sectionSet: Set<Section> = new Set([
    Section.About,
    Section.Projects,
    Section.Contact,
  ]);

  constructor(private translate: TranslateService) {}

  public selectLanguage(language: SupportedLanguage): void {
    this.translate.use(language);
  }
}
