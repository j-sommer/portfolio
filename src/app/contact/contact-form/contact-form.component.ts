import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
  public nameFieldControl = new FormControl();
  public emailFieldControl = new FormControl();
  public messageFieldControl = new FormControl();

  public formGroup = new FormGroup({
    name: this.nameFieldControl,
    email: this.emailFieldControl,
    message: this.messageFieldControl,
  });
}
