import * as yup from "yup";
export const Homepage_Search_Validation_Scheme: any = yup
  .object({
    search_type: yup.string().required("Please choose your search category"),
    search_text: yup.string().required("Please enter your search text"),
  })
  .required();
