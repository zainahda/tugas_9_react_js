import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbComponent from "./Components/BreadcrumbComponent";
import ButtonComponent from "./Components/ButtonComponent";
import NavbarComponent from "./Components/NavbarComponent";
import PaginationComponent from "./Components/PaginationComponent";
import SpinnerComponent from "./Components/SpinnerComponent";
import TabsComponent from "./Components/TabsComponent";

export class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BreadcrumbComponent />
        <Container className="mt-5">
          <Row>
            <Col md={9}>
              <h1>Rumor Transfer Pemain</h1>
            </Col>
            <Col>
            <SpinnerComponent />
            </Col>
          </Row>
          <TabsComponent />
          <PaginationComponent />
          <ButtonComponent />
        </Container>
      </div>
    );
  }
}

export default App;
