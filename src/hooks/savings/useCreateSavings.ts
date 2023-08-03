import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { ISavingsSchema } from "../../@schemas/savings-schema";

function useCreateSavings() {
  const navigate = useNavigate();

  async function createSavings(
    payload: ISavingsSchema
  ): Promise<AxiosResponse<IResponse>> {
    const res = axios.post("http://localhost:3000/api/v1/savings", payload);
    return res;
  }

  return useMutation(createSavings, {
    onSuccess(res) {
      if (res.status === 201) {
        navigate("/");
      }
    },
    onError(error) {
      console.log(error);
    },
  });
}

export default useCreateSavings;
