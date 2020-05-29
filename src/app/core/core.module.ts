import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TranslateModule } from "@ngx-translate/core";

import { RoutingModule } from "../routing/routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuDesktopComponent } from "./components/header/menus/desktop/menu-desktop.component";
import { MenuMobileComponent } from "./components/header/menus/mobile/menu-mobile.component";
import { LegalNoticeComponent } from "./components/legal-notice/legal-notice.component";
import { PrivacyStatementComponent } from "./components/privacy-statement/privacy-statement.component";
import { ScrollService } from "./services/scroll-service/scroll.service";

@NgModule({
  declarations: [
    HeaderComponent,
    LegalNoticeComponent,
    MenuMobileComponent,
    MenuDesktopComponent,
    FooterComponent,
    PrivacyStatementComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    RoutingModule,
    TranslateModule,
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [ScrollService],
  entryComponents: [LegalNoticeComponent, PrivacyStatementComponent],
})
export class CoreModule {}
