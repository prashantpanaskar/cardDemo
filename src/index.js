import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function createCard(book)
{

  var note=null;
  if(book.Price <= 300)
  {
    note = <span className="text-info"> - Bestseller</span>
  }

  return (
      <div key={book.ProdId}  className="card shadow-lg">
        <div className="card-body">
          <h5 className="card-title text-center">{book.Title}</h5>
          <p className="card-text">
            <span>Publisher : {book.Publisher}</span> <br/>
            <span>Author    : {book.Author}</span> <br/>
            <span>Price : {book.Price}</span>{note}<br/>
          </p>
        </div>
      </div>
  )
}

function getBookDetails()
{
  //create book array
  const book1={
    "Title"    : "The Shivaji great",
    "Publisher": "Penguin Random House",
    "Author"   : "Dan Brown",
    "Price"    : 409,
    "ProdId"   : 2012
  }

  const book2={
    "Title"    : "Norse Mythology",
    "Publisher": "Bloomsbury Publishing",
    "Author"   : "Neil Gaiman",
    "Price"    : 300,
    "ProdId"   : 2019
  }

  const books = [book1,book2];

  const element = (<div className="justify-content-center">
  <h3 className="text-center text-primary" style={{width : 800}}>Featured Titles</h3>
  <div className="card-deck justify-content-center" style={{width : 800}}>
    {books.map(book=>createCard(book))}
    </div>
  </div>)

  return element;
  //create element for book array (call createCard for each book object)
}

ReactDOM.render(getBookDetails(), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
