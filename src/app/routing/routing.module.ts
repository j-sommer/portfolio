import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "./routes";
import { routerOptions } from "./models/route-options";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class RoutingModule {}
