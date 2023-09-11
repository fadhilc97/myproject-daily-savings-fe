import { IRegisterSchema } from "../../@schemas/register-schema";
import useCustomMutation from "../useCustomMutation";

const useRegister = () => {
  const registerMutation = useCustomMutation<IRegisterSchema>({
    method: "POST",
    url: "/api/v1/auth/register",
    messages: {
      onMutate: "Memproses Registrasi...",
      onSuccess: "Akun berhasi didaftarkan. Silahkan login",
      onError: "Akun gagal didaftarkan. Silahkan coba kembali",
    },
  });

  return registerMutation;
};

export default useRegister;
