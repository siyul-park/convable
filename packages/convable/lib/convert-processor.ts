import Converter from "./converter";

interface ConvertProcessor<S, T> {
  isConvertible(value: unknown): boolean;
  convert(value: S, converter: Converter): T;
}

export default ConvertProcessor;
