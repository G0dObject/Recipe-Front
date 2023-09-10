import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "../Image/logo.png";
import Back from "../Image/Background1.png";

export class Landing extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${Back})` }} className="background">
        <Container className="text-center d-flex flex-column h-100">
          <div className="flex-auto">
            <Row>
              <Col className="mt-5">
                <img src={Logo} alt="Лого" />
                <p className="mt-2 text-white label">100K+ Premium Recipe </p>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column flex-auto">
            <div className="flex-auto">
              <Row className="mt-5 d-flex">
                <Col>
                  <h1 className="mainlabel text-white flex-auto">
                    Get Cooking
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-white secondlabel">
                    Simple way to find Tasty Recipe
                  </p>
                </Col>
              </Row>
            </div>
            <div className="flex-auto">
              <Row>
                <Col>
                  <Button variant="primary" className=" startbtn text-white ">
                    Start Cooking
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
