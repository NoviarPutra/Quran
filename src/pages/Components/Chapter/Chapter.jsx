import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  ProgressBar,
  Row,
} from "react-bootstrap";

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

  const handleDescription = (id, title) => {
    history.push(`/detail-chapter/${id}`, { title: title });
  };

  const handleRecite = (id, title, verses_count) => {
    history.push(`/detail-chapter/${id}/${title}`, {
      title: title,
      verses_count: verses_count,
    });
  };

  const IsEmpty = () => (
    <Container className="m-auto col-6 ">
      <ProgressBar animated now={100} className="mt-5" />
      <p className="h6 text-muted font-italic font-weight-bold d-flex justify-content-center">
        Wait a sec ...
      </p>
    </Container>
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
              style={{ width: "26rem", height: "12rem" }}
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
                <Row>
                  <Col sm={11}>
                    <Card.Title className="d-flex justify-content-center font-weight-bold m-auto">
                      {s.name_arabic}
                    </Card.Title>
                  </Col>
                  <Col sm={1}>
                    <DropdownButton
                      id="dropdown-item-button"
                      title="Menu"
                      size="sm"
                      className="d-flex justify-content-end"
                      variant="secondary"
                    >
                      <Dropdown.Item
                        as="button"
                        onClick={() =>
                          handleRecite(s.id, s.name_simple, s.verses_count)
                        }
                      >
                        Recite
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() => handleDescription(s.id, s.name_simple)}
                      >
                        Description
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
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
