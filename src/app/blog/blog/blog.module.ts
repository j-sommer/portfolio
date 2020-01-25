import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

import { BlogComponent } from "./blog.component";

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, MatCardModule, MatGridListModule],
  exports: [BlogComponent]
})
export class BlogModule {}
