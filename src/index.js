import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemmingway", "pages": 260},
  {"title": "Go the F**k to Sleep", "author": "Your Mom", "pages": 20},
  {"title": "Dune", "author": "Frank Herbert", "pages": 360}
]

const Book =({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book, i) => <Book 
        key={i}
        title={book.title}
        author={book.author}
        pages={book.pages}
      />
      )}
    </div>
  )
}

      


render(
  <Library books={bookList}/>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
