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

  register(
    converter: ConvertProcessor<unknown, unknown>,
    priority = 0
  ): ConvertManager {
    const index = this.getIndex(priority);
    this.processors.splice(index, 0, converter);
    return this;
  }

  unregister(priority: number): ConvertManager {
    const index = this.getIndex(priority);
    this.processors.splice(index, 1);
    return this;
  }

  private getIndex(priority: number): number {
    return priority >= 0 ? priority : this.processors.length + priority + 1;
  }
}
