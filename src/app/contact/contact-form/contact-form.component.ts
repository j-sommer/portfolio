import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { ErrorStateInvalidFieldMatcher } from "shared/form-error-matcher/error-state-dirty-field/error-state-invalid-field.matcher";

type FormResult = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
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

  public onSend(form: FormGroup): void {
    const formResult: FormResult = form.value;
  }
}
