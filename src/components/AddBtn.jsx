import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const AddBtn = (props) => {
  const { setMovies } = props;
  const [addMovie, setAddMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const { title, description, posterURL, rating } = addMovie;

  const handleChange = (e) =>
    setAddMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      ...addMovie,
      rating: Number(addMovie.rating),
      id: Date.now(),
    };
    setMovies((prev) => [...prev, newMovie]);
    setAddMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="my-4" onClick={handleShow}>
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              id="title"
              name="title"
              value={title}
              required
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              id="description"
              name="description"
              value={description}
              required
            />
            <label htmlFor="posterURL">Poster URL</label>
            <input
              type="url"
              className="form-control"
              onChange={handleChange}
              id="posterURL"
              name="posterURL"
              value={posterURL}
              required
            />
            <label htmlFor="ratin">Rating</label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              id="rating"
              name="rating"
              max={5}
              min={0}
              value={rating}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Annuler
            </Button>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleClose}
            >
              Ajouter
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddBtn;
