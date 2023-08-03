import * as yup from "yup";

export const savingsSchema = yup.object({
  date: yup.string().required("Required"),
  amount: yup.number().min(0, "Should be positive"),
});

export interface ISavingsSchema extends yup.InferType<typeof savingsSchema> {}
