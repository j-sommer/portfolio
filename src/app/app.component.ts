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

  public isSticky = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  public ngOnInit(): void {
    AOS.init();
  }

  public onStuck(isStuck: boolean): void {
    console.log(`is stuck ${isStuck}`);
  }

  public onSticky(isSticky: boolean): void {
    this.isSticky = isSticky;
  }
}
