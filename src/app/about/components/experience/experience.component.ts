import { Component } from "@angular/core";
import ProgrammingLanguageItems from "../../assets/experience/programming-languages.json";
import WebDevelopmentItems from "../../assets/experience/web-development.json";
import ToolsItems from "../../assets/experience/tools.json";
import FrameworkItems from "../../assets/experience/frameworks.json";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  public readonly programmingLanguageItems = ProgrammingLanguageItems;
  public readonly webDevelopmentItems = WebDevelopmentItems;
  public readonly toolsItems = ToolsItems;
  public readonly frameworkItems = FrameworkItems;
}
