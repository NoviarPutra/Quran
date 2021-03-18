import React from "react";
import { Breadcrumb, Col, FormControl, FormGroup, Row } from "react-bootstrap";
import Chapter from "../Components/Chapter/Chapter";

const Quran = () => {
  return (
    <>
      <Row className="justify-content-center m-auto">
        <Col sm={2}>
          <FormGroup className="mt-5 mb-3">
            <FormControl
              size="sm"
              type="text"
              placeholder="Search"
              autoComplete="off"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-center col-12 m-auto">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Al-Qur'an</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Chapter />
    </>
  );
};

export default Quran;
