import React, { useState } from "react";
import MovieListe from "./components/MovieListe";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AddBtn from "./components/AddBtn";
import Filter from "./components/Filter";
import Rating from "./components/Rating";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Blow (2001)",
      description:
        "L'ascension fulgurante et la chute spectaculaire de George Jung, un trafiquant de drogue légendaire des années 70. Sa vie tumultueuse est marquée par des moments d'euphorie décadente et des revers dévastateurs, illustrant le coût exorbitant du monde du crime.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ii4sylRdQnLFPMCLhaER7vb0J6N.jpg",
      rating: 5,
    },

    {
      id: 2,
      title: "John Wick (2014)",
      description:
        "John Wick, ancien tueur à gages à la retraite, est forcé de replonger dans un monde violent lorsqu'un crime odieux frappe trop près de chez lui. La quête de vengeance qui en résulte offre une symphonie d'action stylisée, où la justice personnelle se mesure en balles.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8gd71hpzHIF3gCkmJBwV5egtu3k.jpg",
      rating: 4,
    },

    {
      id: 3,
      title: "Public Enemies (2009) ",
      description:
        "Pendant la Grande Dépression, le redoutable criminel John Dillinger défie les autorités avec audace. Le film plonge dans la traque intense menée par l'agent du FBI Melvin Purvis, offrant un regard fascinant sur cette ère de criminalité notoire et de justice implacable.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hM4UMGbLdf4NoyTvqnxdu18okA6.jpg",
      rating: 3,
    },

    {
      id: 4,
      title: "Scarface (1983)",
      description:
        "Tony Montana, immigrant cubain, gravit les échelons violents du monde criminel de Miami. Dans cette saga épique de pouvoir et de corruption, Scarface explore les conséquences sombres d'une ambition sans limites dans le trafic de drogue impitoyable.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n8C5IuldxTcyo6bWqHfwr4qz8jX.jpg",
      rating: 2,
    },
  ]);

  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <Container>
      <div>
        <Row>
          <Col>
            <AddBtn setMovies={setMovies} />
          </Col>
          <Col>
            <Filter
              title={title}
              setTitle={setTitle}
              rate={rate}
              setRate={setRate}
            />
          </Col>
        </Row>
        <MovieListe movies={movies} title={title} rate={rate} rating={Rating} />
      </div>
    </Container>
  );
};

export default App;
