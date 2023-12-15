import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import Rating from "./Rating";

const MovieCard = (props) => {
  const { movie } = props;
  const { title, description, posterURL, rating } = movie;

  return (
    <Col md={3} sm={6} className="mb-5">
      <Card border="danger" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Rating rate={rating} />
        </ListGroup>
      </Card>
    </Col>
  );
};

export default MovieCard;
