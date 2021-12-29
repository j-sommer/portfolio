import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SectionComponent } from "./components/section/section.component";
import { MediumWidgetModule } from "ngx-medium-widget";

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, TranslateModule, MediumWidgetModule],
  exports: [SectionComponent],
})
export class BlogModule {}
