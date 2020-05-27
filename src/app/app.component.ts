import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as AOS from "aos";
import { ResolutionService } from "core/services/resolution.service";
import { ScrollService } from "core/services/scroll.service";
import { Section } from "shared/models/enums/section.enum";
import { LanguageService } from "shared/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("home") public homeSection: ElementRef;
  @ViewChild("about") public aboutSection: ElementRef;
  @ViewChild("projects") public projectsSection: ElementRef;
  @ViewChild("contact") public contactSection: ElementRef;

  public readonly fadeInIdentifier = "fade-in";
  public readonly sectionFadeInDurationInMs = 1000;

  public isSticky = false;

  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService,
    private resolutionService: ResolutionService
  ) {
    languageService.setDefaultLanguage();
  }

  public ngOnInit(): void {
    AOS.init();
  }

  public ngAfterViewInit(): void {
    this.scrollService.setScrollTarget(
      Section.Home,
      this.homeSection.nativeElement
    );
    this.scrollService.setScrollTarget(
      Section.About,
      this.aboutSection.nativeElement
    );
    this.scrollService.setScrollTarget(
      Section.Projects,
      this.projectsSection.nativeElement
    );
    this.scrollService.setScrollTarget(
      Section.Contact,
      this.contactSection.nativeElement
    );
  }

  public onSticky(isSticky: boolean): void {
    this.isSticky = isSticky;
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event): void {
    this.resolutionService.respondToResize(event);
  }
}
