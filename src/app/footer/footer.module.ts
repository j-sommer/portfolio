import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import {
  FaIconLibrary,
  FontAwesomeModule
} from "@fortawesome/angular-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { ContactSquareComponent } from "./components/contact-square/contact-square.component";
import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [FooterComponent, ContactSquareComponent],
  imports: [CommonModule, MatGridListModule, FontAwesomeModule],
  exports: [FooterComponent]
})
export class FooterModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter);
    library.addIcons(faGithub);
    library.addIcons(faLinkedin);
    library.addIcons(faCodepen);
  }
}
