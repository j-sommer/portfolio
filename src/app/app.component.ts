import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public readonly fadeInIdentifier = "fade-in";
  public readonly sectionFadeInDurationInMs = 1000;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  public ngOnInit(): void {
    AOS.init();
  }
}
