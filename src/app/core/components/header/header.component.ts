import { Component, HostListener, Input, ViewChild } from "@angular/core";
import { MatToolbar } from "@angular/material/toolbar";
import { resolution } from "shared/constants/resolution.const";
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

  public isMobileResolution =
    window.innerWidth < resolution.maxMobileResolution;

  @ViewChild(MatToolbar) toolbar: MatToolbar;

  @HostListener("window:resize", ["$event"])
  public onResize(event): void {
    this.isMobileResolution =
      event.target.innerWidth < resolution.maxMobileResolution;
  }
}
