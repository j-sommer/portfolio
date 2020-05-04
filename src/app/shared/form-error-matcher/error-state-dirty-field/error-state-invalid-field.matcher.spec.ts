import { FormControl, NgForm } from "@angular/forms";

import { ErrorStateInvalidFieldMatcher } from "./error-state-invalid-field.matcher";

describe("ErrorStateInvalidFieldMatcher", () => {
  let matcher: ErrorStateInvalidFieldMatcher;

  beforeEach(() => {
    matcher = new ErrorStateInvalidFieldMatcher();
  });

  it("should return true when control is invalid and dirty", () => {
    // Given
    const expected = true;

    const mockForm = { submitted: false } as unknown;
    const mockControl = {
      invalid: true,
      dirty: true,
      touched: false,
    } as unknown;

    // When
    const actual = matcher.isErrorState(
      mockControl as FormControl,
      mockForm as NgForm
    );

    // Then
    expect(actual).toBe(expected);
  });

  it("should return true when control is invalid and touched", () => {
    // Given
    const expected = true;

    const mockForm = { submitted: false } as unknown;
    const mockControl = {
      invalid: true,
      dirty: false,
      touched: true,
    } as unknown;

    // When
    const actual = matcher.isErrorState(
      mockControl as FormControl,
      mockForm as NgForm
    );

    // Then
    expect(actual).toBe(expected);
  });

  it("should return true when control is invalid and the form submitted", () => {
    // Given
    const expected = true;

    const mockForm = { submitted: true } as unknown;
    const mockControl = {
      invalid: true,
      dirty: false,
      touched: false,
    } as unknown;

    // When
    const actual = matcher.isErrorState(
      mockControl as FormControl,
      mockForm as NgForm
    );

    // Then
    expect(actual).toBe(expected);
  });

  it("should return false when control is valid", () => {
    // Given
    const expected = false;

    const mockForm = { submitted: false } as unknown;
    const mockControl = {
      invalid: false,
      dirty: true,
      touched: false,
    } as unknown;

    // When
    const actual = matcher.isErrorState(
      mockControl as FormControl,
      mockForm as NgForm
    );

    // Then
    expect(actual).toBe(expected);
  });
});
