import * as yup from "yup";
export const Login_Validation_Scheme: any = yup
  .object({
    username: yup.string().required("Please choose your search category"),
    password: yup.string().required("Please enter your search text"),
  })
  .required();
