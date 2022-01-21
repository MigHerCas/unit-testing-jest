import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  test("First test", () => {
    const result = Utils.toUpperCase("abc");

    // Assertion toBE
    expect(result).toBe("ABC");
  });
});
