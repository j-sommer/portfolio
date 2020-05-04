import { ContactService } from "./contact.service";
import { ContactRequest } from "../models/contact-request.model";
import { HttpClient } from "@angular/common/http";

describe("ContactService", () => {
  const mockHttpClient = {
    post: jest.fn(),
  } as unknown;

  let service: ContactService;

  beforeEach(() => {
    service = new ContactService(mockHttpClient as HttpClient);
  });

  it("should send the contact request via POST when invoked", () => {
    // Given
    const mockContactRequest = {
      name: "name",
      email: "test@test.com",
      message: "message",
    } as ContactRequest;

    // When
    const actual = service.sendContactRequest(mockContactRequest);

    // Then
    expect(actual);
  });
});
