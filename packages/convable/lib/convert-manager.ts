import Converter from "./converter";
import ConvertProcessor from "./convert-processor";
import ConvertException from "./convert-exception";

export default class ConvertManager<M = undefined> implements Converter<M> {
  private readonly processors: ConvertProcessor<unknown, unknown, M>[] = [];

  convert(value: unknown, meta?: M): unknown {
    const matchedProcessor = this.processors.find((processor) =>
      processor.isConvertible(value)
    );
    if (matchedProcessor == null) {
      throw new ConvertException("Can't find processor");
    }

    return matchedProcessor.convert(value, this, meta);
  }

  register(
    converter: ConvertProcessor<unknown, unknown, M>
  ): ConvertManager<M> {
    this.processors.push(converter);
    return this;
  }
}
