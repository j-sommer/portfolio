import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactRequest } from "../models/contact-request.model";

@Injectable()
export class ContactService {
  private readonly apiBaseUrl =
    "https://jgqnm1ecf5.execute-api.eu-west-1.amazonaws.com/prod";

  constructor(private http: HttpClient) {}

  public sendContactRequest(contactRequest: ContactRequest): Observable<any> {
    return this.http.post<ContactRequest>(this.apiBaseUrl, contactRequest);
  }
}
