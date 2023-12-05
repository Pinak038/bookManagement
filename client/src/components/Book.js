import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  _id,
  title,
  author,
  genre,
  publicationDate,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Genre: {genre}</div>
          <div>Publication Date: {new Date(publicationDate).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${_id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
