import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RoutingModule } from '../routing/routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

@NgModule({
  declarations: [HeaderComponent, LegalNoticeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RoutingModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
