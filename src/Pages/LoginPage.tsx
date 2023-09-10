import { useParams } from "react-router-dom";
import { store } from "..";
import LoginComponent, {
  LoginForm,
} from "../Components/Authorize/LoginComponent";
import { Button } from "react-bootstrap";

const LoginPage = () => {
  const { loginForm } = useParams<{ loginForm: keyof typeof LoginForm }>();
  let formType = LoginForm.SignIn;

  if (loginForm !== undefined) {
    formType = GetForm(loginForm!);
  }
  return store.isAuth ? (
    <>
      <Button variant="primary" onClick={() => store.logout()}>
        Logout
      </Button>
    </>
  ) : (
    <LoginComponent form={formType} />
  );
};

function GetForm(str: string) {
  switch (str.toLowerCase()) {
    case "login":
      return LoginForm["SignIn" as keyof typeof LoginForm];
    case "signup":
      return LoginForm["SignUp" as keyof typeof LoginForm];
    case "forgot":
      return LoginForm["Forgot" as keyof typeof LoginForm];
    default:
      return LoginForm.SignIn;
  }
}

export default LoginPage;
