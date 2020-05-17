import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import {
  faAngular,
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { TranslateModule } from "@ngx-translate/core";

import { DescriptionComponent } from "./components/description/description.component";
import { ExperienceItemComponent } from "./components/experience-item/experience-item.component";
import { ExperienceListComponent } from "./components/experience-list/experience-list.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { SectionComponent } from "./components/section/section.component";

@NgModule({
  declarations: [
    SectionComponent,
    DescriptionComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
  ],
  imports: [CommonModule, MatListModule, TranslateModule, FontAwesomeModule],
  exports: [SectionComponent],
})
export class AboutModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faJava, faJs, faAngular, faHtml5, faUnity, faCss3);
  }
}
