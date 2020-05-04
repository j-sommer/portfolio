import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatInputModule } from "@angular/material/input";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";

import { ContactFormComponent } from "./contact-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("ContactFormComponent", () => {
  let component: ContactFormComponent;

  describe("With Template", () => {
    let fixture: ComponentFixture<ContactFormComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactFormComponent],
        imports: [
          TranslateModule.forRoot(),
          MatInputModule,
          NoopAnimationsModule,
          ReactiveFormsModule,
        ],
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

    it("should contain a h1 header with 'Contact' as content when created", () => {
      // Given
      const expectedContent = "contact.contact-form.header";
      const expectedClass = "contact-form__header";

      // When
      const headerElement = fixture.debugElement.query(By.css("h1"));

      // Then
      expect(headerElement).toBeTruthy();
      expect(headerElement.nativeElement.textContent).toContain(
        expectedContent
      );
      expect(headerElement.nativeElement.classList).toContain(expectedClass);
    });

    it("should contain a <p> element with the expected text as content when created", () => {
      // Given
      const expectedContent = "contact.contact-form.info-text";
      const expectedClass = "contact-form__info-text";

      // When
      const paragraphElement = fixture.debugElement.query(By.css("p"));

      // Then
      expect(paragraphElement).toBeTruthy();
      expect(paragraphElement.nativeElement.textContent).toContain(
        expectedContent
      );
      expect(paragraphElement.nativeElement.classList).toContain(expectedClass);
    });

    describe("Form", () => {
      let formElement: DebugElement;

      beforeEach(() => {
        formElement = fixture.debugElement.query(By.css("form"));
      });

      it("should contain a form with the given form group attached when created", () => {
        expect(formElement).toBeTruthy();
        expect(formElement.componentInstance.formGroup).toMatchObject(
          component.formGroup
        );
      });

      describe("Submit Button", () => {
        it("should contain a submit primary button when created", () => {
          // Given
          const expectedContent = "contact.contact-form.form.submit";

          // When
          const submitButtonElement = formElement.query(By.css("button"));

          // Then
          expect(submitButtonElement).toBeTruthy();
          expect(submitButtonElement.nativeElement.textContent).toContain(
            expectedContent
          );
        });

        it("should disable submit button when form is invalid", () => {
          // Given
          component.formGroup.markAllAsTouched();

          // When
          fixture.detectChanges();

          const submitButtonElement = formElement.query(By.css("button"));

          // Then
          expect(submitButtonElement.nativeElement.disabled).toBe(true);
        });

        it("should enable submit button when form is valid", () => {
          // Given
          component.emailFieldControl.setValue("valid@email.com");
          component.nameFieldControl.setValue("valid");
          component.formGroup.markAllAsTouched();

          // When
          fixture.detectChanges();

          const submitButtonElement = formElement.query(By.css("button"));

          // Then
          expect(submitButtonElement.nativeElement.disabled).toBe(false);
        });
      });

      describe("Name Field", () => {
        let fieldElement;

        beforeEach(() => {
          fieldElement = formElement.query(
            By.css("#contact-form__form__name-field")
          );
        });

        it("should contain an input field for the name when created", () => {
          // Given
          const expectedFieldClass = "contact-form__form__field";
          const expectedLabelContent =
            "contact.contact-form.form.name-field.label";
          const expectedPlaceholderContent =
            "contact.contact-form.form.name-field.placeholder";

          // When
          const labelElement = fieldElement.query(By.css("mat-label"));
          const inputElement = fieldElement.query(By.css("input"));

          // Then
          expect(fieldElement.nativeElement.classList).toContain(
            expectedFieldClass
          );
          expect(inputElement.nativeElement.placeholder).toContain(
            expectedPlaceholderContent
          );
          expect(inputElement.componentInstance.nameFieldControl).toMatchObject(
            component.nameFieldControl
          );
          expect(
            inputElement.componentInstance.invalidFieldMatcher
          ).toMatchObject(component.invalidFieldMatcher);

          expect(labelElement.nativeElement.textContent).toContain(
            expectedLabelContent
          );
        });

        it("should display an error message when the name field is not filled", () => {
          // Given
          const expectedErrorContent =
            "contact.contact-form.form.name-field.required";

          component.nameFieldControl.setValue("");
          component.nameFieldControl.markAsTouched();

          // When
          fixture.detectChanges();

          const errorElement = fieldElement.query(By.css("mat-error"));

          // Then
          expect(errorElement).toBeTruthy();
          expect(errorElement.nativeElement.textContent).toContain(
            expectedErrorContent
          );
        });
      });

      describe("Email Field", () => {
        let fieldElement;

        beforeEach(() => {
          fieldElement = formElement.query(
            By.css("#contact-form__form__email-field")
          );
        });

        it("should contain an input field for the email when created", () => {
          // Given
          const expectedFieldClass = "contact-form__form__field";
          const expectedLabelContent =
            "contact.contact-form.form.email-field.label";
          const expectedPlaceholderContent =
            "contact.contact-form.form.email-field.placeholder";

          // When
          const labelElement = fieldElement.query(By.css("mat-label"));
          const inputElement = fieldElement.query(By.css("input"));

          // Then
          expect(fieldElement.nativeElement.classList).toContain(
            expectedFieldClass
          );
          expect(inputElement.nativeElement.placeholder).toContain(
            expectedPlaceholderContent
          );
          expect(
            inputElement.componentInstance.emailFieldControl
          ).toMatchObject(component.emailFieldControl);
          expect(
            inputElement.componentInstance.invalidFieldMatcher
          ).toMatchObject(component.invalidFieldMatcher);

          expect(labelElement.nativeElement.textContent).toContain(
            expectedLabelContent
          );
        });

        it("should display an error message when the email field is filled but invalid", () => {
          // Given
          const expectedErrorContent =
            "contact.contact-form.form.email-field.invalid";

          component.emailFieldControl.setValue("invalid email address");
          component.emailFieldControl.markAsTouched();

          // When
          fixture.detectChanges();

          const errorElement = fieldElement.query(By.css("mat-error"));

          // Then
          expect(errorElement).toBeTruthy();
          expect(errorElement.nativeElement.textContent).toContain(
            expectedErrorContent
          );
        });

        it("should display an error message when the email field is not filled", () => {
          // Given
          const expectedErrorContent =
            "contact.contact-form.form.email-field.required";

          component.emailFieldControl.setValue("");
          component.emailFieldControl.markAsTouched();

          // When
          fixture.detectChanges();

          const errorElement = fieldElement.query(By.css("mat-error"));

          // Then
          expect(errorElement).toBeTruthy();
          expect(errorElement.nativeElement.textContent).toContain(
            expectedErrorContent
          );
        });
      });

      describe("Message Field", () => {
        it("should contain a textarea field for the message when created", () => {
          // Given
          const expectedFieldClass = "contact-form__form__textarea";
          const expectedFieldId = "contact-form__form__message-field";
          const expectedLabelContent =
            "contact.contact-form.form.message-field.label";
          const expectedPlaceholderContent =
            "contact.contact-form.form.message-field.placeholder";

          // When
          const fieldElement = formElement.query(By.css(`#${expectedFieldId}`));
          const labelElement = fieldElement.query(By.css("mat-label"));
          const textareaElement = fieldElement.query(By.css("textarea"));

          // Then
          expect(fieldElement.nativeElement.classList).toContain(
            expectedFieldClass
          );
          expect(textareaElement.nativeElement.placeholder).toContain(
            expectedPlaceholderContent
          );
          expect(
            textareaElement.componentInstance.messageFieldControl
          ).toMatchObject(component.messageFieldControl);

          expect(labelElement.nativeElement.textContent).toContain(
            expectedLabelContent
          );
        });
      });
    });
  });

  describe("Without Template", () => {
    beforeEach(() => {
      component = new ContactFormComponent();
    });
  });
});
