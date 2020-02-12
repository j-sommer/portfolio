import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { ContactSquareComponent } from "./components/contact-square/contact-square.component";
import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [FooterComponent, ContactSquareComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [FooterComponent]
})
export class FooterModule {}
