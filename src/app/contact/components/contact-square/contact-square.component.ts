import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, Input } from "@angular/core";

import { ContactProvider } from "../../models/contact-provider";

@Component({
  selector: "app-contact-square",
  templateUrl: "./contact-square.component.html",
  styleUrls: ["./contact-square.component.scss"],
  animations: [
    trigger("hover", [
      state(
        "hoverIn",
        style({
          backgroundColor: "#E1CE7A",
        })
      ),
      state("hoverOut", style({})),
      transition("hoverIn => hoverOut", [animate("0.3s")]),
      transition("hoverOut => hoverIn", [animate("0.5s")]),
    ]),
  ],
})
export class ContactSquareComponent {
  @Input()
  public targetUrl: string;

  @Input()
  public contactProvider: ContactProvider;

  public isHovering = false;

  public onClick(): void {
    window.location.href = this.targetUrl;
  }
}
