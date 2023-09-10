import photo from "../../Image/PhotoExample.png";
import ach from "../../Image/Achievment.png";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect } from "react";
import { store } from "../..";
const UserProfile = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Row>
          <Col className="picture-wrapper">
            <Image className="picture" src={photo} />
          </Col>
        </Row>
        <Row className="mt-2 label-block">
          <Col>
            <h3>{store.user.userName}</h3>
            <h3 style={{ opacity: 0.44 }}>{store.user.userName}</h3>
          </Col>
        </Row>
        <Row className="achivements">
          <h3 className="mt-3">Achivements</h3>
          <Col className="mt-1">
            <Image src={ach}></Image>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserProfile;
