import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { TranslateModule } from "@ngx-translate/core";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactSquareComponent } from "./components/contact-square/contact-square.component";
import { FollowMeComponent } from "./components/follow-me/follow-me.component";
import { SectionComponent } from "./components/section/section.component";
import { ContactService } from "./services/contact.service";

@NgModule({
  declarations: [
    ContactFormComponent,
    SectionComponent,
    ContactSquareComponent,
    FollowMeComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  exports: [SectionComponent],
  providers: [ContactService],
})
export class ContactModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMedium);
    library.addIcons(faGithub);
    library.addIcons(faLinkedin);
    library.addIcons(faCodepen);
    library.addIcons(faTwitter);
  }
}
