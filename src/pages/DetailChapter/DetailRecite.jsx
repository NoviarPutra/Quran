import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router";

const DetailRecite = () => {
  const { id } = useParams();
  const location = useLocation();
  const [verses, setVerses] = useState([]);
  const title = location.state.title;
  const verses_count = location.state.verses_count;
  const IsEmpty = () => (
    <Container className="m-auto col-6 ">
      <ProgressBar animated now={100} className="mt-5" />
      <p className="h6 text-muted font-italic font-weight-bold d-flex justify-content-center">
        Wait a sec ...
      </p>
    </Container>
  );
  console.log(verses);
  useEffect(() => {
    const fetchRecite = () => {
      return axios
        .get(`https://api.quran.com/api/v4/quran/verses/imlaei`)
        .then((response) => {
          return setVerses(response.data.verses);
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
        <Table responsive="md">
          <thead className="text-center">
            <tr>
              <th>Translation</th>
              <th className="d-flex justify-content-end">Verses</th>
            </tr>
          </thead>
          <tbody>
            {verses.length > 0
              ? verses.map((verse, index) => (
                  <tr key={index}>
                    <td>Translate</td>
                    <td className="d-flex justify-content-end">
                      {verse.text_imlaei}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DetailRecite;
