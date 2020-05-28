import { ScrollService } from "./scroll.service";

describe("ScrollService", () => {
  let service: ScrollService;

  beforeEach(() => {
    service = new ScrollService();
  });

  it("should exist", () => {
    expect(service).toBeTruthy();
  });
});
