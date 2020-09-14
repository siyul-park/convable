interface Converter<M = undefined> {
  convert(value: unknown, meta?: M): unknown;
}

export default Converter;
