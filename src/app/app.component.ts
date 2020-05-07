import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import * as AOS from "aos";
import { LanguageService } from "shared/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public readonly fadeInIdentifier = "fade-in";
  public readonly sectionFadeInDurationInMs = 1000;

  public isSticky = false;

  constructor(private languageService: LanguageService) {
    languageService.setDefaultLanguage();
  }

  public ngOnInit(): void {
    AOS.init();
  }

  public onSticky(isSticky: boolean): void {
    this.isSticky = isSticky;
  }
}
