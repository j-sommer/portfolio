import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contact-square",
  templateUrl: "./contact-square.component.html",
  styleUrls: ["./contact-square.component.scss"]
})
export class ContactSquareComponent {
  @Input()
  targetUrl: string;
}
