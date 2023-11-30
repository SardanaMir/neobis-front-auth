import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
  .string()
  .email("Введите e-mail")
  .required("Введите e-mail"),

  username: yup
  .string()
  .min(3, "Логин должен быть не менее 3 букв")
  .required("Введите логин"),

  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password"), null], "Пароль не совпадает")
  .required("Введите пароль"),
});
