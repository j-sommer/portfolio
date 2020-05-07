import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SupportedLanguage } from "shared/models/enums/supported-language.enum";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  public setDefaultLanguage(): void {
    if (window.navigator.language.slice(0, 2) === SupportedLanguage.German) {
      this.translate.setDefaultLang(SupportedLanguage.German);
    } else {
      this.translate.setDefaultLang(SupportedLanguage.English);
    }
  }

  public setLanguage(languageCode: SupportedLanguage): void {
    this.translate.use(languageCode);
  }
}
