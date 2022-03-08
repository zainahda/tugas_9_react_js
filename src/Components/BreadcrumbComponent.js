import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const BreadcrumbComponent = () => {
  return (
    <Container>
      <Row>
        <Col md={7}></Col>
        <Col md={3} style={{ background: "#bdc3c7" }}>
          <Breadcrumb className="d-flex align-items-center justify-content-start">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/berita">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item href="/bola">Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadcrumbComponent;
