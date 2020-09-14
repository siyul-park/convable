interface Converter<M> {
  convert(value: unknown, meta?: M): unknown;
}

export default Converter;
