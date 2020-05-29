import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { ColorType } from "shared/models/enums/color-type.enum";
import { Section } from "shared/models/enums/section.enum";

import { LegalNoticeComponent } from "../legal-notice/legal-notice.component";
import { PrivacyStatementComponent } from "../privacy-statement/privacy-statement.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  constructor(
    private scrollService: ScrollService,
    private dialog: MatDialog
  ) {}

  public scrollToTop(): void {
    this.scrollService.scrollTo(Section.Home);
  }

  public openLegalNotice(): void {
    this.dialog.open(LegalNoticeComponent, {
      backdropClass: "custom-overlay-backdrop",
      panelClass: "custom-overlay-panel--small",
    });
  }

  public openPrivacyStatement(): void {
    this.dialog.open(PrivacyStatementComponent, {
      backdropClass: "custom-overlay-backdrop",
      panelClass: "custom-overlay-panel",
    });
  }
}
