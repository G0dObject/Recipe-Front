import { useState } from "react";
import { store } from "../..";

const NavigationBar = (props: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const list = ["Profile", "Party", "Clan"];
  const [select, setSelect] = useState("Profile");
  return (
    <>
      <div className="d-flex flex-row">
        {list.map((item) => {
          return (
            <div className="me-2" key={item}>
              <div
                className={`menu-item ${select === item ? "active" : ""}`}
                onMouseEnter={() => setSelect(item)}
                onClick={() => props.setState(item)}
              >
                {item}
              </div>
            </div>
          );
        })}
        <div className="menu-item ml-auto" onClick={() => store.logout()}>
          Logout
        </div>
      </div>

      <div className="nav-line"></div>
    </>
  );
};

export default NavigationBar;
