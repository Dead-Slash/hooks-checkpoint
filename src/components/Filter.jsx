import React from "react";
import Form from "react-bootstrap/Form";
import Rating from "./Rating";

const Filter = (props) => {
  const { title, setTitle, rate, setRate } = props;
  return (
    <div>
      <Form.Control
        className="mt-4"
        type="text"
        value={title}
        placeholder="Tapez pour filtrer..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <Rating rate={rate} setRate={setRate} />
    </div>
  );
};

export default Filter;
