import { Component, Input, ViewChild } from "@angular/core";
import { MatToolbar } from "@angular/material/toolbar";
import { ResolutionService } from "core/services/resolution-service/resolution.service";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { Section } from "shared/models/enums/section.enum";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public readonly sectionSet: Set<Section> = new Set([
    Section.About,
    Section.Projects,
    Section.Contact,
  ]);

  @Input()
  public isSticky: boolean;

  public currentViewSize$ = this.resolutionService.currentSize$;

  @ViewChild(MatToolbar) toolbar: MatToolbar;

  constructor(
    private scrollService: ScrollService,
    private resolutionService: ResolutionService
  ) {}

  public scrollToHome(): void {
    this.scrollService.scrollTo(Section.Home, false);
  }
}
