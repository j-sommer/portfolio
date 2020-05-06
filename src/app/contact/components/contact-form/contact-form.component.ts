import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ErrorStateInvalidFieldMatcher } from "shared/form-error-matcher/error-state-dirty-field/error-state-invalid-field.matcher";

import { ContactRequest } from "../../models/contact-request.model";
import { ContactService } from "../../services/contact.service";
import { ColorType } from "shared/models/enums/color-type.enum";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
  constructor(private contactService: ContactService) {}

  public nameFieldControl = new FormControl("", [Validators.required]);
  public emailFieldControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  public messageFieldControl = new FormControl();

  public invalidFieldMatcher = new ErrorStateInvalidFieldMatcher();

  public formGroup = new FormGroup({
    name: this.nameFieldControl,
    email: this.emailFieldControl,
    message: this.messageFieldControl,
  });

  public submitIconContent = "email";
  public submitColor: ColorType = ColorType.Primery;

  public onSend(form: FormGroup): void {
    const formResult: ContactRequest = form.value;

    this.contactService
      .sendContactRequest(formResult)
      .pipe(first())
      .subscribe({
        next: this.onSendSuccess.bind(this),
        error: this.onSendError.bind(this),
      });
  }

  private onSendSuccess(): void {
    this.submitIconContent = "done";
    this.submitColor = ColorType.Success;
  }

  private onSendError(): void {
    this.submitIconContent = "error";
    this.submitColor = ColorType.Warn;
  }
}
