import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

import { ConvertManager } from "convable";
import ConvertCaseProcessor from "./convert-case-processor";
import ArrayConvertProcessor from "./array-convert-processor";
import DefaultConvertProcessor from "./default-convert-processor";

const arrayConvertProcess = new ArrayConvertProcessor();
const defaultConvertProcess = new DefaultConvertProcessor();

export function createConverter(
  convertCase: (name: string) => string
): ConvertManager {
  return new ConvertManager()
    .register(new ConvertCaseProcessor(convertCase))
    .register(arrayConvertProcess)
    .register(defaultConvertProcess);
}

export const toCamelCaseConverter = createConverter(camelCase);
export const toCapitalCaseConverter = createConverter(capitalCase);
export const toConstantCaseConverter = createConverter(constantCase);
export const toDotCaseConverter = createConverter(dotCase);
export const toHeaderCaseConverter = createConverter(headerCase);
export const toNoCaseConverter = createConverter(noCase);
export const toParamCaseConverter = createConverter(paramCase);
export const toPascalCaseConverter = createConverter(pascalCase);
export const toPathCaseConverter = createConverter(pathCase);
export const toSentenceCaseConverter = createConverter(sentenceCase);
export const toSnakeCaseConverter = createConverter(snakeCase);

export default {
  createConverter,
  toCamelCaseConverter,
  toCapitalCaseConverter,
  toConstantCaseConverter,
  toDotCaseConverter,
  toHeaderCaseConverter,
  toNoCaseConverter,
  toParamCaseConverter,
  toPascalCaseConverter,
  toPathCaseConverter,
  toSentenceCaseConverter,
  toSnakeCaseConverter,
};
