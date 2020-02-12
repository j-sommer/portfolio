import { Routes } from '@angular/router';

import { LegalNoticeComponent } from '../core/components/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "legal-notice", component: LegalNoticeComponent },
];
