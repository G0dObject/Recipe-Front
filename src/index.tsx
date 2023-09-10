import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style/_import.scss";
import Store from "./store";
import UserService from "./Service/UserService";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const store = new Store();
export const Context = createContext(store);
console.log(import.meta.env.VITE_APP_AUTH_URL);

store.isAuth = false;
root.render(
  <Context.Provider value={store}>
    <App />
  </Context.Provider>
);
