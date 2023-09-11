import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup.string().required("Wajib diisi").default(""),
  email: yup.string().required("Wajib diisi").default(""),
  password: yup
    .string()
    .required("Wajib diisi")
    .min(8, "Minimal 8 karakter")
    .default(""),
  password2: yup
    .string()
    .required("Wajib diisi")
    .oneOf([yup.ref("password")], "Kata sandi harus sesuai")
    .default(""),
});

export interface IRegisterSchema extends yup.InferType<typeof registerSchema> {}
