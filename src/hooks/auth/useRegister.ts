import { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { IRegisterSchema } from "../../@schemas/register-schema";
import { AlertContext } from "../../contexts/AlertProvider";
import { OverlayContext } from "../../contexts/OverlayProvider";
import axios from "../../@config/axios";

const useRegister = () => {
  const navigate = useNavigate();
  const overlayContext = useContext(OverlayContext);
  const alertContext = useContext(AlertContext);

  function register(
    payload: IRegisterSchema
  ): Promise<AxiosResponse<IResponse>> {
    const res = axios.post("/api/v1/auth/register", payload);
    return res;
  }

  const registerMutation = useMutation({
    mutationFn: register,
    onMutate() {
      overlayContext.showOverlay(true, "Memproses registrasi...");
    },
    onSuccess() {
      overlayContext.showOverlay(false);
      alertContext.showAlert(
        "success",
        "Akun berhasil didaftarkan. Silahkan login"
      );
      navigate("/login");
    },
    onError() {
      overlayContext.showOverlay(false);
      alertContext.showAlert(
        "error",
        "Akun gagal didaftarkan. Silahkan coba kembali"
      );
    },
  });

  return registerMutation;
};

export default useRegister;
