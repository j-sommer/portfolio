import { Injectable } from "@angular/core";
import { Section } from "shared/models/enums/section.enum";

@Injectable()
export class ScrollService {
  private readonly scrollOffset = -90;

  private sectionElementMapping: Map<Section, HTMLElement> = new Map();

  constructor() {}

  public setScrollTarget(section: Section, element: HTMLElement): void {
    if (!element) {
      throw new Error("target element not defined");
    }

    this.sectionElementMapping.set(section, element);
  }

  public scrollTo(section: Section, withOffset: boolean = true): void {
    if (!this.sectionElementMapping.has(section)) {
      throw new Error("section not in target collection");
    }

    const targetElementTop = this.sectionElementMapping.get(section).offsetTop;
    const targetPosition = withOffset
      ? targetElementTop + this.scrollOffset
      : targetElementTop;

    window.scrollTo({ behavior: "smooth", top: targetPosition });
  }
}
