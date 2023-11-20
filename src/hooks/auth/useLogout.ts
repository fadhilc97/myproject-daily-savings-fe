import { useContext } from "react";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import { AlertContext } from "../../contexts/AlertProvider";

const useLogout = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const alertContext = useContext(AlertContext);

  async function logout(): Promise<AxiosResponse> {
    return await axiosPrivate.get("/api/v1/auth/logout");
  }

  return useMutation({
    mutationFn: logout,
    onSuccess() {
      alertContext.showAlert("success", "Logout berhasil");
      navigate("/login");
    },
    onError() {
      alertContext.showAlert("error", "Logout gagal. Silahkan coba kembali");
    },
  });
};

export default useLogout;
