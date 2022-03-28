import { UrlWithParsedQuery, parse } from "url";

export class Utils {
  static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) {
      throw new Error("Empty URL");
    }
    return parse(url, true);
  }

  static toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
}
