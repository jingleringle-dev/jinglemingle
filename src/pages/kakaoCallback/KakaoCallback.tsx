import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useKaKaoLogin } from "services";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code")!;
  console.log(code);

  const { data, isSuccess, isError } = useKaKaoLogin({ code: code });

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("userId", data.data.data.userId);
      localStorage.setItem("access_token", data.headers.access_token);
      localStorage.setItem("refresh_token", data.headers.refresh_token);

      navigate(`/room/${localStorage.getItem("userId")}`);
    }

    if (isError) {
      console.log("error");
    }
  }, [data]);

  return <div>Loading</div>;
};

export default KakaoCallback;
