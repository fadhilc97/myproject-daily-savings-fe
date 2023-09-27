import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Wajib diisi").default(""),
  password: yup
    .string()
    .required("Wajib diisi")
    .min(8, "Minimal 8 karakter")
    .default(""),
});

export interface ILoginSchema extends yup.InferType<typeof loginSchema> {}
