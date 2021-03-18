import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

const Chapter = () => {
  const [surah, setSurah] = useState([]);

  const fetchSurah = () => {
    axios
      .get("https://api.quran.com/api/v4/chapters?language=en")
      .then((response) => {
        setSurah(response.data.chapters);
      });
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
    <Container>
      <Row>
        {surah.length > 0 ? (
          surah.map((s) => (
            <Col sm={4} key={s.id}>
              <Card
                className="m-3"
                border="secondary"
                style={{ width: "18rem", height: "12rem" }}
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
                  <Card.Title className="d-flex justify-content-end">
                    {s.name_arabic}
                  </Card.Title>
                  <Row>
                    <Col>
                      <p className="h6">{s.translated_name.name}</p>
                    </Col>
                    <Col>
                      <p className="h6">Verses : {s.verses_count}</p>
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
    </Container>
  );
};

export default Chapter;
