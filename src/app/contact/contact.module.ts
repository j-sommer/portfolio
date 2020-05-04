import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { TranslateModule } from "@ngx-translate/core";

import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SectionComponent } from "./section/section.component";

@NgModule({
  declarations: [ContactFormComponent, SectionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [SectionComponent],
})
export class ContactModule {}
