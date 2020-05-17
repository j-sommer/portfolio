import { Component, Input } from "@angular/core";

@Component({
  selector: "app-experience-item",
  templateUrl: "./experience-item.component.html",
  styleUrls: ["./experience-item.component.scss"],
})
export class ExperienceItemComponent {
  @Input() public text: string;
  @Input() public icon: string;
  @Input() public isDevIcon = false;
}
