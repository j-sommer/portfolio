import { Component, Input } from "@angular/core";

import { ContactProvider } from "../contact-provider";

@Component({
  selector: "app-contact-square",
  templateUrl: "./contact-square.component.html",
  styleUrls: ["./contact-square.component.scss"]
})
export class ContactSquareComponent {
  @Input()
  public targetUrl: string;

  @Input()
  public contactProvider: ContactProvider;

  public onClick(): void {
    window.location.href = this.targetUrl;
  }
}
