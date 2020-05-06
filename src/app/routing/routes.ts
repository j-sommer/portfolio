import { Routes } from "@angular/router";

import { LegalNoticeComponent } from "../core/components/legal-notice/legal-notice.component";
import { AppComponent } from "../app.component";

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "legal-notice", component: LegalNoticeComponent },
];
