import Converter from "./converter";
import ConvertProcessor from "./convert-processor";
import ConvertException from "./convert-exception";

export default class ConvertManager implements Converter {
  private readonly processors: ConvertProcessor<unknown, unknown>[] = [];

  convert(value: unknown): unknown {
    const matchedProcessor = this.processors.find((processor) =>
      processor.isConvertible(value)
    );
    if (matchedProcessor == null) {
      throw new ConvertException("Can't find processor");
    }

    return matchedProcessor.convert(value, this);
  }

  register(converter: ConvertProcessor<unknown, unknown>): ConvertManager {
    this.processors.push(converter);
    return this;
  }
}
