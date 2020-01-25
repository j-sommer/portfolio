import { Routes } from '@angular/router';

import { BlogComponent } from '../blog/blog/blog.component';
import { LegalNoticeComponent } from '../core/components/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "legal-notice", component: LegalNoticeComponent },
  { path: "blog", component: BlogComponent }
];
