import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactFormComponent } from "./contact-form.component";
import { By } from "@angular/platform-browser";

describe("ContactFormComponent", () => {
  let component: ContactFormComponent;

  describe("With Template", () => {
    let fixture: ComponentFixture<ContactFormComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactFormComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContactFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("should create", () => {
      expect(component).toBeTruthy();
    });

    it("should contain a h3 header with 'Contact' as content when created", () => {
      // Given
      const expectedContent = "Contact";

      // When
      const headerElement = fixture.debugElement.query(By.css("h3"));

      // Then
      expect(headerElement).toBeTruthy();
      expect(headerElement.nativeElement.textContent).toContain(
        expectedContent
      );
    });

    it("should contain a <p> element with the expected text as content when created", () => {
      // Given
      const expectedContent = "Do you have any questions? Contact me!";

      // When
      const paragraphElement = fixture.debugElement.query(By.css("p"));

      // Then
      expect(paragraphElement).toBeTruthy();
      expect(paragraphElement.nativeElement.textContent).toContain(
        expectedContent
      );
    });
  });

  describe("Without Template", () => {
    beforeEach(() => {
      component = new ContactFormComponent();
    });
  });
});
