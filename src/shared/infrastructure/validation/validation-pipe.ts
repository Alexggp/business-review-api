import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
export * from "class-validator";

export const validationPipe = async (
  // eslint-disable-next-line
  schema: new () => {},
  requestObject: object
) => {
  const transformedClass: object = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  return { errors: errors };
};
