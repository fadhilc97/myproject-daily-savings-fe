import { useContext } from "react";
import axios from "../../@config/axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { AxiosResponse } from "axios";

const useRefreshToken = () => {
  const { auth, setAuth } = useContext(AuthContext);

  async function refresh() {
    const response: AxiosResponse<IResponse<IAuth>> = await axios.get(
      "/api/v1/auth/refresh",
      {
        withCredentials: true,
      }
    );
    const accessToken = response.data.data?.accessToken;

    setAuth({ ...auth, accessToken });
    return accessToken;
  }

  return refresh;
};

export default useRefreshToken;
