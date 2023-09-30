import { ILoginSchema } from "../../@schemas/login-schema";
import useCustomMutation from "../useCustomMutation";

interface ILoginResponse extends IResponse<ILoginResult> {}

const useRegister = () => {
  const loginMutation = useCustomMutation<ILoginSchema, ILoginResponse>({
    method: "POST",
    url: "/api/v1/auth/login",
    messages: {
      onMutate: "Memproses login...",
      onSuccess: "Login berhasil",
      onError: "Login gagal. Silahkan coba kembali",
    },
  });

  return loginMutation;
};

export default useRegister;
