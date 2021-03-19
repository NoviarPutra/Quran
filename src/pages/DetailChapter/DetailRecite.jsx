import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router";

const DetailRecite = () => {
  const { id } = useParams();
  const location = useLocation();
  const [ayat, setAyat] = useState([]);
  const title = location.state.title;
  const IsEmpty = () => (
    <Container className="m-auto col-6 ">
      <ProgressBar animated now={100} className="mt-5" />
      <p className="h6 text-muted font-italic font-weight-bold d-flex justify-content-center">
        Wait a sec ...
      </p>
    </Container>
  );
  useEffect(() => {
    const fetchRecite = () => {
      return axios
        .get(
          `https://al-quran-8d642.firebaseio.com/surat/${id}.json?print=pretty`
        )
        .then((response) => {
          return setAyat(response.data);
        });
    };
    fetchRecite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Row className="justify-content-center col-12 m-auto">
        <Col className="mt-5 mb-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Detail Recite</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <p className="h3 d-flex justify-content-center font-weight-bold mt-3">
        {title}
      </p>
      <Container>
        {ayat.length > 0 ? (
          ayat.map((ayat, index) => (
            <Card body className="mb-3" border="white" key={ayat.nomor}>
              <div>
                <p className="h6 d-flex justify-content-end font-weight-bold m-auto">
                  {ayat.ar}
                </p>
                <div className="mt-5">
                  <p className="h6 text-muted text-justify font-italic">
                    {ayat.id}
                  </p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Row className="col-12 m-auto">
            <IsEmpty />
          </Row>
        )}
      </Container>
    </>
  );
};

export default DetailRecite;
