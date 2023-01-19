import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Please enter a valid mobile number!")
    .required(),
  address: yup.string().required(),
  student: yup.array().length(1).min(1),
  textArea: yup.string().min(30).required(),
});
