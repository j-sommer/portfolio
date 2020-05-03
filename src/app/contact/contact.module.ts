import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { TranslateModule } from "@ngx-translate/core";

import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SectionComponent } from "./section/section.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactFormComponent, SectionComponent],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, MatInputModule],
  exports: [SectionComponent],
})
export class ContactModule {}
