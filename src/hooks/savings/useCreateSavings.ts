import { ISavingsSchema } from "../../@schemas/savings-schema";
import useCustomMutation from "../useCustomMutation";

function useCreateSavings() {
  return useCustomMutation<ISavingsSchema>({
    method: "POST",
    url: "/api/v1/savings",
    isPrivate: true,
    messages: {
      onMutate: "Memproses data...",
      onSuccess: "Data berhasil ditambahkan",
      onError: "Data gagal ditambahkan",
    },
    redirectUrl: {
      onSuccess: "/",
    },
  });
}

export default useCreateSavings;
