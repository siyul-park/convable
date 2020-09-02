import { ConvertProcessor, Converter } from "convable";

export default class DefaultConvertProcessor
  implements ConvertProcessor<unknown, unknown> {
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  convert(value: unknown, converter: Converter): unknown {
    return value;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  isConvertible(value: unknown): boolean {
    return true;
  }
}
