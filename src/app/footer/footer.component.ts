import { Component } from "@angular/core";
import { ScrollService } from "core/services/scroll.service";
import { Section } from "shared/models/enums/section.enum";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) {}

  public scrollToTop(): void {
    this.scrollService.scrollTo(Section.Home);
  }
}
