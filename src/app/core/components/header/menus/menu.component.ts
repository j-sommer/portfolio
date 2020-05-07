import { SupportedLanguage } from "shared/models/enums/supported-language.enum";
import { LanguageService } from "shared/services/language/language.service";

export abstract class MenuComponent {
  public readonly SupportedLanguage = SupportedLanguage;

  constructor(protected languageService: LanguageService) {}

  public selectLanguage(language: SupportedLanguage): void {
    this.languageService.setLanguage(language);
  }
}
