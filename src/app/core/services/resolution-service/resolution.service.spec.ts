import { ResolutionService } from "./resolution.service";

describe("ResolutionService", () => {
  let service: ResolutionService;

  beforeEach(() => {
    service = new ResolutionService();
  });

  it("it should exist", () => {
    expect(service).toBeTruthy();
  });
});
