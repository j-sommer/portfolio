import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ErrorStateInvalidFieldMatcher } from "shared/form-error-matcher/error-state-dirty-field/error-state-invalid-field.matcher";
import { ColorType } from "shared/models/enums/color-type.enum";

import { ContactRequest } from "../../models/contact-request.model";
import { ContactService } from "../../services/contact.service";

enum FormState {
  Init,
  Processing,
  Success,
  Error,
}

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
  constructor(private contactService: ContactService) {}

  public readonly FormState = FormState;

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

  public formState = FormState.Init;

  public submitColor: ColorType = ColorType.Primery;

  public onSend(form: FormGroup): void {
    const formResult: ContactRequest = form.value;

    this.formState = FormState.Processing;

    this.contactService
      .sendContactRequest(formResult)
      .pipe(first())
      .subscribe({
        next: this.onSendSuccess.bind(this),
        error: this.onSendError.bind(this),
      });
  }

  private onSendSuccess(): void {
    this.formState = FormState.Success;
    this.submitColor = ColorType.Success;

    this.formGroup.disable();
  }

  private onSendError(): void {
    this.formState = FormState.Error;
    this.submitColor = ColorType.Warn;
  }
}
