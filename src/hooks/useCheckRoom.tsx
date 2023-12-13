import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthCheck } from "types";

/**
 * "notLoggedIn" => 로그인하지 않음
 * "myRoom" => 로그인 했고, 내 방에 있음
 * "othersRoom" => 로그인 했고, 타인의 방에 있음
 */
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
