import Converter from "./converter";

interface ConvertProcessor<S, T, M> {
  isConvertible(value: unknown): boolean;
  convert(value: S, converter: Converter<M>, meta?: M): T;
}

export default ConvertProcessor;
