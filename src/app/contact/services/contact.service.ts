import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ContactRequest } from "../models/contact-request.model";

@Injectable()
export class ContactService {
  private readonly apiUrl = "http://localhost:3000/contact";

  constructor(private httpClient: HttpClient) {}

  public sendContactRequest(contactRequest: ContactRequest): Observable<any> {
    return this.httpClient.post(this.apiUrl, contactRequest);
  }
}
