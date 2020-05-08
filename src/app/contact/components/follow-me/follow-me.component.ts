import { Component } from "@angular/core";

import { ContactProvider } from "../../models/contact-provider";

@Component({
  selector: "app-follow-me",
  templateUrl: "./follow-me.component.html",
  styleUrls: ["./follow-me.component.scss"],
})
export class FollowMeComponent {
  public readonly ContactProvider = ContactProvider;
  public readonly tooltipDelayInMs = 500;
  public readonly tooltipPosition = "below";
}
