import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthCheck } from "types";

export default function useCheckRoom() {
  const [authCheck, setAuthCheck] = useState<AuthCheck>("notLoggedIn");
  const { id } = useParams();
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("userId");
    if (!accessToken) {
      setAuthCheck("notLoggedIn");
    } else if (accessToken && userId && userId === id) {
      setAuthCheck("myRoom");
    } else setAuthCheck("othersRoom");
  }, [id]);
  return { authCheck };
}
