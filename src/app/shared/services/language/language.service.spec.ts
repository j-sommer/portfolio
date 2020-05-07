import { SupportedLanguage } from "shared/models/enums/supported-language.enum";

import { LanguageService } from "./language.service";

describe("LanguageService", () => {
  const mockTranslateService = {
    setDefaultLang: jest.fn(),
  };

  let service: LanguageService;

  beforeEach(() => {
    service = new LanguageService(mockTranslateService as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should exist", () => {
    expect(service).toBeTruthy();
  });

  it("should set the default language to german when the browser language is german", () => {
    // Given
    jest
      .spyOn(window.navigator, "language", "get")
      .mockReturnValueOnce("de-DE");

    const setDefaultLangSpy = jest.spyOn(
      mockTranslateService,
      "setDefaultLang"
    );

    // When
    const actual = service.setDefaultLanguage();

    // Then
    expect(setDefaultLangSpy).toHaveBeenCalledWith(SupportedLanguage.German);
  });

  it("should set the default language to english when the browser language is not german", () => {
    // Given
    jest
      .spyOn(window.navigator, "language", "get")
      .mockReturnValueOnce("en-US");

    const setDefaultLangSpy = jest.spyOn(
      mockTranslateService,
      "setDefaultLang"
    );

    // When
    const actual = service.setDefaultLanguage();

    // Then
    expect(setDefaultLangSpy).toHaveBeenCalledWith(SupportedLanguage.English);
  });
});
