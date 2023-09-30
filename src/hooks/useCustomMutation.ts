import { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { AlertContext } from "../contexts/AlertProvider";
import { OverlayContext } from "../contexts/OverlayProvider";
import axios from "../@config/axios";

type Props = {
  method: "POST" | "PUT";
  url: string;
  messages: {
    onMutate: string;
    onSuccess: string;
    onError: string;
  };
  // TODO: need create custom callback onMutate, onSuccess, onError
};

const useCustomMutation = <P = unknown, R = IResponse>({
  method,
  url,
  messages,
}: Props) => {
  const navigate = useNavigate();
  const overlayContext = useContext(OverlayContext);
  const alertContext = useContext(AlertContext);

  function mutationFn(payload: P): Promise<AxiosResponse<R>> {
    const res = axios({
      method,
      url,
      data: payload,
    });
    return res;
  }

  const registerMutation = useMutation({
    mutationFn,
    onMutate() {
      overlayContext.showOverlay(true, messages.onMutate);
    },
    onSuccess() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("success", messages.onSuccess);
      navigate("/login");
    },
    onError() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("error", messages.onError);
    },
  });

  return registerMutation;
};

export default useCustomMutation;
