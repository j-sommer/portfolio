import { Component, Input } from "@angular/core";
import { ResolutionService } from "core/services/resolution-service/resolution.service";

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
  @Input() public link: string;

  public isHovering = false;
  public currentSize$ = this.resolutionService.currentSize$;

  constructor(private resolutionService: ResolutionService) {}
}
