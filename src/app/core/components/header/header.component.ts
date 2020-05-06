import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SupportedLanguage } from "shared/models/enums/supported-language.enum";
import { Section } from "shared/models/enums/section.enum";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public readonly SupportedLanguage = SupportedLanguage;
  public readonly sectionSet: Set<Section> = new Set([
    Section.About,
    Section.Projects,
    Section.Contact,
  ]);

  @Input()
  public isSticky: boolean;

  @ViewChild(MatToolbar) toolbar: MatToolbar;

  constructor(private translate: TranslateService) {}

  public selectLanguage(language: SupportedLanguage): void {
    this.translate.use(language);
  }
}
