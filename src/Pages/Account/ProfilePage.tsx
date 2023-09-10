import React from "react";
import UserProfile from "../../Components/Main/UserProfile";
import NavigationBar from "../../Components/Main/NavigationBar";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <div style={{ background: "#0f0f0f" }}>
      <Container className="profile">
        <NavigationBar></NavigationBar>
        <UserProfile></UserProfile>
      </Container>{" "}
    </div>
  );
};

export default ProfilePage;
