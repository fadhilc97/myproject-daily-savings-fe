import { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { AlertContext } from "../contexts/AlertProvider";
import { OverlayContext } from "../contexts/OverlayProvider";
import axios from "../@config/axios";
import useAxiosPrivate from "./useAxiosPrivate";

type Options = {
  isPrivate?: boolean;
  method: "POST" | "PUT";
  url: string;
  messages?: {
    onMutate?: string;
    onSuccess?: string;
    onError?: string;
  };
  redirectUrl?: {
    onSuccess?: string;
    onError?: string;
  };
  axiosRequestConfig?: AxiosRequestConfig;
};

const useCustomMutation = <P = unknown, R = IResponse>({
  isPrivate = false,
  method,
  url,
  messages,
  axiosRequestConfig,
  redirectUrl,
}: Options) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const overlayContext = useContext(OverlayContext);
  const alertContext = useContext(AlertContext);

  function mutationFn(payload: P): Promise<AxiosResponse<R>> {
    const axiosRequestOptions: AxiosRequestConfig = {
      method,
      url,
      data: payload,
      ...axiosRequestConfig,
    };
    const res = isPrivate
      ? axiosPrivate(axiosRequestOptions)
      : axios(axiosRequestOptions);
    return res;
  }

  const registerMutation = useMutation({
    mutationFn,
    onMutate() {
      overlayContext.showOverlay(true, messages?.onMutate);
    },
    onSuccess() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("success", messages?.onSuccess || "");
      navigate(redirectUrl?.onSuccess || "");
    },
    onError() {
      overlayContext.showOverlay(false);
      alertContext.showAlert("error", messages?.onError || "");
      navigate(redirectUrl?.onError || "");
    },
  });

  return registerMutation;
};

export default useCustomMutation;
