import { Injectable } from "@angular/core";
import API from "@aws-amplify/api";
import { from, Observable } from "rxjs";

import { ContactRequest } from "../models/contact-request.model";

@Injectable()
export class ContactService {
  private readonly apiName = "contact";
  private readonly path = "/contact";

  public sendContactRequest(contactRequest: ContactRequest): Observable<any> {
    return from(API.post(this.apiName, this.path, { body: contactRequest }));
  }
}
