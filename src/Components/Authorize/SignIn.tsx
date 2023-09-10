import { useRef } from "react";

import { store } from "../..";
import { Container } from "react-bootstrap";
// import github from "../../Image/github.svg";
// import google from "../../Image/google.svg";
// import microsoft from "../../Image/microsoft.svg";

export const Login = () => {
  // const authPath = import.meta.env.VITE_APP_AUTH_URL as string;

  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  const sendLoginRequest = () => {
    var username = usernameref!.current!.value;
    var password = passwordref!.current!.value;

    console.log(username, password);

    store.login({ username, password }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Container></Container>
    </>
  );
};
