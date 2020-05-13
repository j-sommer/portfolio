import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { FooterComponent } from "./footer.component";
import { By } from "@angular/platform-browser";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [MatButtonModule, MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
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
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});

    // When
    const buttonElement = fixture.debugElement.query(By.css("button"));
    buttonElement.nativeElement.click();

    // Then
    expect(buttonElement).toBeTruthy();
    expect(scrollToSpy).toHaveBeenCalledWith({ behavior: "smooth", top: 0 });
  });
});
