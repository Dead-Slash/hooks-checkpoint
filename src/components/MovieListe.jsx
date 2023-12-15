import React from "react";
import MovieCard from "./MovieCard";
import Row from "react-bootstrap/Row";
import Rating from "./Rating";

const MovieListe = (props) => {
  const { movies, title, rate } = props;

  if (title === "" && rate === 0) {
    return (
      <Row>
        {movies.map((element) => (
          <MovieCard movie={element} key={element.id} />
        ))}
      </Row>
    );
  }
  return (
    <Row>
      {movies
        .filter(
          (element) =>
            element.title.toLowerCase().includes(title.toLowerCase().trim()) ||
            element.rate === Rating
        )
        .map((element) => (
          <MovieCard movie={element} key={element.id} />
        ))}
      ;
    </Row>
  );
};

export default MovieListe;
