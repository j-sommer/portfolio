import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { ProjectsItemComponent } from "./components/projects-item/projects-item.component";
import { SectionComponent } from "./components/section/section.component";

@NgModule({
  declarations: [SectionComponent, ProjectsItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SectionComponent],
})
export class ProjectsModule {}
