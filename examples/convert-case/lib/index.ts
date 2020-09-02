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

const convertToCamelCaseProcessor = new ConvertCaseProcessor(camelCase);
const convertToCapitalCaseProcessor = new ConvertCaseProcessor(capitalCase);
const convertToConstantCaseProcessor = new ConvertCaseProcessor(constantCase);
const convertToDotCaseProcessor = new ConvertCaseProcessor(dotCase);
const convertToHeaderCaseProcessor = new ConvertCaseProcessor(headerCase);
const convertToNoCaseProcessor = new ConvertCaseProcessor(noCase);
const convertToParamCaseProcessor = new ConvertCaseProcessor(paramCase);
const convertToPascalCaseProcessor = new ConvertCaseProcessor(pascalCase);
const convertToPathCaseProcessor = new ConvertCaseProcessor(pathCase);
const convertToSentenceCaseProcessor = new ConvertCaseProcessor(sentenceCase);
const convertToSnakeCaseProcessor = new ConvertCaseProcessor(snakeCase);

const arrayConvertProcess = new ArrayConvertProcessor();
const defaultConvertProcess = new DefaultConvertProcessor();

function createConverter(
  convertCaseProcessor: ConvertCaseProcessor
): ConvertManager {
  return new ConvertManager()
    .register(convertCaseProcessor)
    .register(arrayConvertProcess)
    .register(defaultConvertProcess);
}

export const toCamelCaseConverter = createConverter(
  convertToCamelCaseProcessor
);
export const toCapitalCaseConverter = createConverter(
  convertToCapitalCaseProcessor
);
export const toDotCaseConverter = createConverter(convertToDotCaseProcessor);
export const toHeaderCaseConverter = createConverter(
  convertToHeaderCaseProcessor
);
export const toNoCaseConverter = createConverter(convertToNoCaseProcessor);
export const toConstantCaseConverter = createConverter(
  convertToConstantCaseProcessor
);
export const toParamCaseConverter = createConverter(
  convertToParamCaseProcessor
);
export const toPascalCaseConverter = createConverter(
  convertToPascalCaseProcessor
);
export const toPathCaseConverter = createConverter(convertToPathCaseProcessor);
export const toSentenceCaseConverter = createConverter(
  convertToSentenceCaseProcessor
);
export const toSnakeCaseConverter = createConverter(
  convertToSnakeCaseProcessor
);

export default {
  toCamelCaseConverter,
  toCapitalCaseConverter,
  toDotCaseConverter,
  toHeaderCaseConverter,
  toNoCaseConverter,
  toConstantCaseConverter,
  toParamCaseConverter,
  toPascalCaseConverter,
  toPathCaseConverter,
  toSentenceCaseConverter,
  toSnakeCaseConverter,
};
