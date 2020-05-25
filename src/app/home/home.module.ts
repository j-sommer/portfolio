import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { TitleComponent } from "./components/title/title.component";

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, TranslateModule, MatIconModule],
  exports: [TitleComponent],
})
export class HomeModule {}
