import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      title: props.book ? props.book.title : '',
      author: props.book ? props.book.author : '',
      genre: props.book ? props.book.genre : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { title, author, genre } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, author, genre];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        title,
        author,
        genre
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Book Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="genre"
            value={genre}
            placeholder="Enter name of genre"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
