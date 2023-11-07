import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../hooks/auth/useRefreshToken";
import { AuthContext } from "../contexts/AuthProvider";

function PersistLoginRoute() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    let isMounted = true;

    async function verifyRefreshToken() {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    }

    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(`isLoading : ${isLoading}`);
    console.log(`access token : ${auth.accessToken}`);
  }, [isLoading]);

  return isLoading ? <p>Loading...</p> : <Outlet />;
}

export default PersistLoginRoute;
