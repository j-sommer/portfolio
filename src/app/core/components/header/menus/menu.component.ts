import { ScrollService } from "core/services/scroll.service";
import { Section } from "shared/models/enums/section.enum";
import { SupportedLanguage } from "shared/models/enums/supported-language.enum";
import { LanguageService } from "shared/services/language/language.service";

export abstract class MenuComponent {
  public readonly SupportedLanguage = SupportedLanguage;
  public readonly Section = Section;

  constructor(
    protected languageService: LanguageService,
    protected scrollService: ScrollService
  ) {}

  public selectLanguage(language: SupportedLanguage): void {
    this.languageService.setLanguage(language);
  }

  public scrollTo(section: Section): void {
    this.scrollService.scrollTo(section);
  }
}
