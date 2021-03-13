import { ContactService } from "./contact.service";

describe("ContactService", () => {
  let service: ContactService;

  beforeEach(() => {
    service = new ContactService({} as any);
  });

  it.todo("should send the contact request via POST when invoked");
});
