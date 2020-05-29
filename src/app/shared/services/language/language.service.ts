import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SupportedLanguage } from "shared/models/enums/supported-language.enum";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  public setDefaultLanguage(): void {
    if (this.getCurrentLanguageCode() === SupportedLanguage.German) {
      this.translate.setDefaultLang(SupportedLanguage.German);
    } else {
      this.translate.setDefaultLang(SupportedLanguage.English);
    }
  }

  public setLanguage(languageCode: SupportedLanguage): void {
    this.translate.use(languageCode);
  }

  private getCurrentLanguageCode(): string {
    return window.navigator.language.slice(0, 2);
  }
}
