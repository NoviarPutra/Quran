import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const DetailChapter = () => {
  const { id } = useParams();
  const location = useLocation();
  const title = location.state.title;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const fetchDetail = () => {
      return axios
        .get(`https://api.quran.com/api/v4/chapters/${id}/info?language=en`)
        .then((response) => {
          return setDetail(response.data.chapter_info);
        });
    };
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          dangerouslySetInnerHTML={{
            __html: `${detail.text}`,
          }}
        ></div>
        <p className="d-flex justify-content-center font-italic font-weight-bold">
          Source : {detail.source}
        </p>
      </Container>
    </>
  );
};

export default DetailChapter;
