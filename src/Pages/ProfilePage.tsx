import { useState } from "react";
import NavigationBar from "../Components/Main/NavigationBar";
import { Container } from "react-bootstrap";
import UserProfile from "../Components/Main/UserProfile";

const ProfilePage = () => {
  const [page, setPage] = useState("Profile");

  const ReturnPage = (): JSX.Element => {
    switch (page) {
      case "Profile":
        return <UserProfile />;
      case "Party":
        return <>Party</>;
      case "Clan":
        return <>Clan</>;
      default:
        return <>Profile</>;
    }
  };

  return (
    <div style={{ background: "#0f0f0f" }}>
      <Container className="profile">
        <NavigationBar state={page} setState={setPage}></NavigationBar>
        <ReturnPage></ReturnPage>
      </Container>
    </div>
  );
};

export default ProfilePage;
