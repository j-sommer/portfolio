import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { SectionComponent } from "./components/section/section.component";
import { BlogService } from "./services/blog.service";

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SectionComponent],
  providers: [BlogService],
})
export class BlogModule {}
