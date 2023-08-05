import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { ISavingsSchema } from "../../@schemas/savings-schema";
import { OverlayContext } from "../../contexts/OverlayProvider";

function useCreateSavings() {
  const navigate = useNavigate();
  const overlayContext = useContext(OverlayContext);

  async function createSavings(
    payload: ISavingsSchema
  ): Promise<AxiosResponse<IResponse>> {
    const res = axios.post("http://localhost:3000/api/v1/savings", payload);
    return res;
  }

  const createSavingsMutation = useMutation(createSavings, {
    onMutate() {
      overlayContext.showOverlay(true, "Creating savings data...");
    },
    onSuccess(res) {
      overlayContext.showOverlay(false);
      if (res.status === 201) {
        navigate("/");
      }
    },
    onError(error) {
      overlayContext.showOverlay(false);
      console.log(error);
    },
  });

  return createSavingsMutation;
}

export default useCreateSavings;
