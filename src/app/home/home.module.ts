import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TitleComponent } from "./components/title/title.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TitleComponent],
})
export class HomeModule {}
