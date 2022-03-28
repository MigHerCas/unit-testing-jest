import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  beforeEach(() => {
    console.log("before each");
  });

  beforeAll(() => {
    console.log("before all");
  });

  test("First test", () => {
    const result = Utils.toUpperCase("abc");

    // Assertion toBE
    expect(result).toBe("ABC");
  });

  test("Parse simple URL", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:8080/login");

    expect(parsedUrl.href).toBe("http://localhost:8080/login");
    expect(parsedUrl.port).toBe("8080");
    expect(parsedUrl.protocol).toBe("http:");
    expect(parsedUrl.query).toEqual({});
  });

  test("Parse simple URL with query", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:8080/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };

    expect(parsedUrl.query).toEqual(expectedQuery);
  });

  test("test invalid URL", () => {
    function expectError() {
      Utils.parseUrl("");
    }
    expect(expectError).toThrowError("Empty URL");
  });

  test("test invalid URL with try/catch ", () => {
    try {
      Utils.parseUrl("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Empty URL");
    }
  });
});

describe.skip("Skipped test suite", () => {
  test.only("First only test", () => {
    const result = Utils.toUpperCase("abc");

    // Assertion toBE
    expect(result).toBe("ABC");
  });
});
