import * as yup from "yup";

export const savingsSchema = yup.object({
  date: yup.string().required("Wajib diisi"),
  amount: yup.number().required("Wajib diisi").min(0, "Harus bernilai positif"),
});

export interface ISavingsSchema extends yup.InferType<typeof savingsSchema> {}
