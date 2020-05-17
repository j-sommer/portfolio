import { Injectable } from "@angular/core";
import { ResizeEvent } from "core/models/resize-event.model";
import { BehaviorSubject, Observable } from "rxjs";
import { resolution } from "shared/constants/resolution.const";

@Injectable()
export class ResolutionService {
  private currentSizeSource: BehaviorSubject<ResizeEvent> = new BehaviorSubject(
    {
      size: window.innerWidth,
      isMobileResolution: this.isMobileResolution(window.innerWidth),
    }
  );
  public currentSize$: Observable<
    ResizeEvent
  > = this.currentSizeSource.asObservable();

  public respondToResize(event): void {
    const size = event.target.innerWidth;

    this.currentSizeSource.next({
      size,
      isMobileResolution: this.isMobileResolution(size),
    });
  }

  private isMobileResolution(width: number): boolean {
    return width < resolution.maxMobileResolution;
  }
}
