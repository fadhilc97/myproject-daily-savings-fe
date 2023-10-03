import { useContext } from "react";
import { useQuery } from "react-query";
import axios from "../../@config/axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { AxiosResponse } from "axios";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);

  async function refresh(): Promise<AxiosResponse<IResponse<IAuth>>> {
    const response = await axios.get("/api/v1/auth/refresh", {
      withCredentials: true,
    });
    return response;
  }

  const queryResult = useQuery({
    queryFn: refresh,
    queryKey: ["refresh"],
  });

  const accessToken = queryResult.data?.data.data?.accessToken;

  if (queryResult.isSuccess) {
    setAuth({ accessToken });
  }

  return accessToken;
};

export default useRefreshToken;
