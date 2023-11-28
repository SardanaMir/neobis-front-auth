import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const letters = /[a-zA-Z]/
const num = /[0-9]/;
const specialSymbol = /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
  .string()
  .email("Введите e-mail")
  .required("Required"),

  username: yup
  .string()
  .min(3, "Логин должен быть не менее 3 букв")
  .required("Required"),

  password: yup
  .string()
  .max(15, 'max')
  .min(8, 'min')
  .matches(letters,'буквы')
  .matches(num,'цифры')
  .matches(specialSymbol,'символ')
  .required("Required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
