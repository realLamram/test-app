import * as yup from "yup";

export default async function yupValidation(
  schema: any,
  input: any
): Promise<{ isValid: boolean; errorPaths?: string[]; errorMessages?: string[] }> {
  let isValid = false;
  const errorPaths: string[] = [];
  const errorMessages: string[] = [];
  await schema
    .validate(input, { abortEarly: false })
    .then(() => (isValid = true))
    .catch((errors: yup.ValidationError) => {
      errors.inner.forEach((error) => {
        if (error.path) {
          errorPaths.push(error.path);
        }
        errorMessages.push(error.message);
        console.error(error.message);
      });
    });

  return {
    isValid,
    errorPaths: errorPaths.length ? errorPaths : undefined,
    errorMessages: errorMessages.length ? errorMessages : undefined,
  };
}
