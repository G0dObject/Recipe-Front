import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./SignIn";
import SignUp from "./SignUp";

const LoginComponent = (props: { form: LoginForm } | undefined) => {
  switch (props?.form) {
    case LoginForm.SignIn:
      return (
        <div className="auth-background">
          <div className="auth-wrapper">
            <Login />
          </div>
        </div>
      );

    case LoginForm.SignUp:
      return (
        <div className="auth-background">
          <div className="auth-wrapper">
            <SignUp />
          </div>
        </div>
      );
    case LoginForm.Forgot:
      return (
        <div className="auth-background">
          <div className="auth-wrapper">
            <ForgotPassword />
          </div>
        </div>
      );

    default:
      return <>Nope</>;
  }
};

export default LoginComponent;

export enum LoginForm {
  SignIn,
  SignUp,
  Forgot,
}
