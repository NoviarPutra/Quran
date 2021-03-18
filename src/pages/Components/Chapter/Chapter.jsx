import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

const Chapter = () => {
  const [surah, setSurah] = useState([]);
  const history = useHistory();

  const fetchSurah = () => {
    axios
      .get("https://api.quran.com/api/v4/chapters?language=en")
      .then((response) => {
        setSurah(response.data.chapters);
      });
  };

  const handleHistory = (id, title) => {
    history.push(`/detail-chapter/${id}`, { title: title });
  };

  const IsEmpty = () => (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>
        <Row>
          <Col>
            <p className="h6">Surah : Loading ...</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p className="h6">Loading ...</p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title className="d-flex justify-content-end">
          Loading ...
        </Card.Title>
        <Row>
          <Col>
            <p className="h6">Loading ...</p>
          </Col>
          <Col>
            <p className="h6">Loading ...</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  useEffect(() => {
    fetchSurah();
  }, []);

  return (
    <Row className="col-12 m-auto">
      {surah.length > 0 ? (
        surah.map((s) => (
          <Col sm={4} key={s.id}>
            <Card
              className="m-3"
              border="secondary"
              style={{ width: "26rem", height: "12rem", cursor: "pointer" }}
              onClick={() => handleHistory(s.id, s.name_simple)}
            >
              <Card.Header>
                <Row>
                  <Col>
                    <p className="h6">Surah : {s.id}</p>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <p className="h6">{s.name_simple}</p>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center font-weight-bold">
                  {s.name_arabic}
                </Card.Title>
                <p className="h4 d-flex justify-content-center font-weight-bold font-italic">
                  {s.translated_name.name}
                </p>
                <Row className="mt-2">
                  <Col>
                    <p className="h6 text-uppercase">
                      Revelation Place : {s.revelation_place}
                    </p>
                  </Col>
                  <Col>
                    <p className="h6 d-flex justify-content-end">
                      Verses : {s.verses_count}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <IsEmpty />
      )}
    </Row>
  );
};

export default Chapter;
