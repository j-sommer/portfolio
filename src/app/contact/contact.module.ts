import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { TranslateModule } from "@ngx-translate/core";

import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { SectionComponent } from "./components/section/section.component";
import { ContactService } from "./services/contact.service";

@NgModule({
  declarations: [ContactFormComponent, SectionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [SectionComponent],
  providers: [ContactService],
})
export class ContactModule {}
