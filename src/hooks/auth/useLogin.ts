import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginSchema } from "../../@schemas/login-schema";
import useCustomMutation from "../useCustomMutation";
import { AuthContext } from "../../contexts/AuthProvider";

interface ILoginResponse extends IResponse<IAuth> {}

const useRegister = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const loginMutation = useCustomMutation<ILoginSchema, ILoginResponse>({
    method: "POST",
    url: "/api/v1/auth/login",
    messages: {
      onMutate: "Memproses login...",
      onSuccess: "Login berhasil",
      onError: "Login gagal. Silahkan coba kembali",
    },
  });

  if (loginMutation.isSuccess) {
    authContext.setAuth({
      accessToken: loginMutation.data?.data.data?.accessToken,
    });
    navigate("/");
  }

  return loginMutation;
};

export default useRegister;
