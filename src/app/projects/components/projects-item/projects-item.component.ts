import { Component, Input } from "@angular/core";

@Component({
  selector: "app-projects-item",
  templateUrl: "./projects-item.component.html",
  styleUrls: ["./projects-item.component.scss"],
})
export class ProjectsItemComponent {
  @Input() public title: string;
  @Input() public subTitle: string;
  @Input() public imagePath: string;
  @Input() public description: string;
  @Input() public tags: string[] = [];
}
