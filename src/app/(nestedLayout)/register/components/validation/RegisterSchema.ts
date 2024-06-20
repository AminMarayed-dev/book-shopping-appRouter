import * as yup from "yup";

const ERROR_MESSAGE = "This field is mandatory";

export const RegisterSchemaSignUP = yup.object({
  username: yup
    .string()
    .required(ERROR_MESSAGE)
    .min(5, "Must be at least 5 characters")
    .max(22, "Must be at most 22 characters")
    .test(
      "username",
      "Username must contain both numbers and characters",
      (value) => {
        const hasNumber = /\d/.test(value);
        const hasCharacter = /[a-zA-Z]/.test(value);
        return hasNumber && hasCharacter;
      }
    ),
  email: yup.string().required(ERROR_MESSAGE).email("Invalid email format"),
  password: yup
    .string()
    .required(ERROR_MESSAGE)
    .min(8, "Must be at least 8 characters"),
});


export const RegisterSchemaSignIN = yup.object({
  username: yup
    .string()
    .required(ERROR_MESSAGE)
    .min(5, "Must be at least 5 characters")
    .max(22, "Must be at most 22 characters")
    .test(
      "username",
      "Username must contain both numbers and characters",
      (value) => {
        const hasNumber = /\d/.test(value);
        const hasCharacter = /[a-zA-Z]/.test(value);
        return hasNumber && hasCharacter;
      }
    ),
  password: yup
    .string()
    .required(ERROR_MESSAGE)
    .min(8, "Must be at least 8 characters"),
});