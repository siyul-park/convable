import { toCamelCaseConverter, toSnakeCaseConverter } from "./index";

describe("convert case", () => {
  const date = new Date();
  const camelCase = {
    thisIsObject: {
      thisIsElement1: 1,
      thisIsElement2: {
        thisIsElement3: {},
      },
      thisIsArray: [
        {
          thisIsElement4: {
            thisIsElement5: date,
          },
        },
        {
          thisIsElement6: false,
        },
      ],
    },
  };

  const snakeCase = {
    this_is_object: {
      this_is_element1: 1,
      this_is_element2: {
        this_is_element3: {},
      },
      this_is_array: [
        {
          this_is_element4: {
            this_is_element5: date,
          },
        },
        {
          this_is_element6: false,
        },
      ],
    },
  };

  test("toCamel", () => {
    const converted = toCamelCaseConverter.convert(snakeCase);
    expect(converted).toEqual(camelCase);
  });

  test("toSnake", () => {
    const converted = toSnakeCaseConverter.convert(camelCase);
    expect(converted).toEqual(snakeCase);
  });
});
