import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';

const EditBook = ({ history }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  function getBook() {
    axios.get(`https://book-management-pinaks-projects-11969895.vercel.app/api/books/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      setBook(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  useEffect(() => {
    getBook();
  }, []);

  const handleOnSubmit = (book) => {
    axios.put(`https://book-management-pinaks-projects-11969895.vercel.app/api/books/${id}`, book)
    .then(function (response) {
      console.log(response);
      history.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div>
      {book && (<BookForm book={book} handleOnSubmit={handleOnSubmit} />)}
    </div>
  );
};

export default EditBook;
