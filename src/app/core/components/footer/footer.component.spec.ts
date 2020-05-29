import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { By } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { Section } from "shared/models/enums/section.enum";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let scrollService: ScrollService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        TranslateModule.forRoot(),
      ],
      providers: [ScrollService],
    }).compileComponents();
  }));

  beforeEach(() => {
    scrollService = TestBed.inject(ScrollService);

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain a button for scrolling to the top when created", () => {
    // Given
    const scrollToSpy = jest
      .spyOn(scrollService, "scrollTo")
      .mockImplementation(() => {});

    // When
    const buttonElement = fixture.debugElement.query(By.css("button"));
    buttonElement.nativeElement.click();

    // Then
    expect(buttonElement).toBeTruthy();
    expect(scrollToSpy).toHaveBeenCalledWith(Section.Home);
  });
});
