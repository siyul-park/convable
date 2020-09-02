import { ConvertProcessor, Converter } from "convable";

export default class ConvertCaseProcessor
  implements
    ConvertProcessor<Record<string, unknown>, Record<string, unknown>> {
  private readonly convertCase: (name: string) => string;

  constructor(convertCase: (name: string) => string) {
    this.convertCase = convertCase;
  }

  convert(
    object: Record<string, unknown>,
    converter: Converter
  ): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    Object.entries(object).forEach(([key, value]) => {
      result[this.convertCase(key)] = converter.convert(value);
    });

    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  isConvertible(value: unknown): boolean {
    if (typeof value !== "object") return false;

    // eslint-disable-next-line no-prototype-builtins
    return Object.getPrototypeOf(value).isPrototypeOf(Object);
  }
}
