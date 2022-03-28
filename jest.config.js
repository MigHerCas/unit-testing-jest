module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Logs to be more explainatory
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
};
