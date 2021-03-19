import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const DetailChapter = () => {
  const location = useLocation();
  const title = location.state.title;
  const deskripsi = location.state.deskripsi;
  return (
    <>
      <Row className="justify-content-center col-12 m-auto">
        <Col className="mt-5 mb-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Detail Chapter</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <p className="h3 d-flex justify-content-center font-weight-bold mt-3">
        {title}
      </p>
      <Container>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: `${deskripsi}`,
          }}
        ></div>
      </Container>
    </>
  );
};

export default DetailChapter;
