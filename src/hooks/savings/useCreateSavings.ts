import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { ISavingsSchema } from "../../@schemas/savings-schema";
import { OverlayContext } from "../../contexts/OverlayProvider";
import { AlertContext } from "../../contexts/AlertProvider";

function useCreateSavings() {
  const navigate = useNavigate();
  const overlayContext = useContext(OverlayContext);
  const alertContext = useContext(AlertContext);

  async function createSavings(
    payload: ISavingsSchema
  ): Promise<AxiosResponse<IResponse>> {
    const res = axios.post("http://localhost:3000/api/v1/savings", payload);
    return res;
  }

  const createSavingsMutation = useMutation(createSavings, {
    onMutate() {
      overlayContext.showOverlay(true, "Memproses data...");
    },
    onSuccess() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("success", "Data berhasil ditambahkan");
      navigate("/");
    },
    onError() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("error", "Data gagal ditambahkan");
    },
  });

  return createSavingsMutation;
}

export default useCreateSavings;
