import { Component, Input } from "@angular/core";

import { ExperienceListItem } from "./list-item.model";

@Component({
  selector: "app-experience-list",
  templateUrl: "./experience-list.component.html",
})
export class ExperienceListComponent {
  @Input() public header: string;
  @Input() public experienceItems: ExperienceListItem[];
}
