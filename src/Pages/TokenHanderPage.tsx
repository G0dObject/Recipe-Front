import { useParams } from "react-router-dom";
import { store } from "..";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Jwt } from "../Core/Interfaces/Auth/jwt";

const TokenHanderPage = () => {
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      var decode: Jwt = jwt_decode(token) as Jwt;

      if (decode.exp) {
        store.externalLogin(token, decode);
        window.location.href = "/";
      } else {
        alert("Something went wrong, try again");
      }
    }
  }, []);

  return <></>;
};

export default TokenHanderPage;
