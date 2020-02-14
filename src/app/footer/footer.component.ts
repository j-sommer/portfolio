import { Component } from "@angular/core";

import { ContactProvider } from "./components/contact-provider";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  public readonly ContactProvider = ContactProvider;
}
