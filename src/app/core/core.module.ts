import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TranslateModule } from "@ngx-translate/core";

import { RoutingModule } from "../routing/routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { MenuDesktopComponent } from "./components/header/menus/desktop/menu-desktop.component";
import { MenuMobileComponent } from "./components/header/menus/mobile/menu-mobile.component";
import { LegalNoticeComponent } from "./components/legal-notice/legal-notice.component";
import { ScrollService } from "./services/scroll.service";

@NgModule({
  declarations: [
    HeaderComponent,
    LegalNoticeComponent,
    MenuMobileComponent,
    MenuDesktopComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RoutingModule,
    TranslateModule,
  ],
  exports: [HeaderComponent],
  providers: [ScrollService],
})
export class CoreModule {}
