import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { Book } from "./Book";

export const Search = ({ onShelfChange, shelfBooks }) => {
  const [foundBooks, setFoundBooks] = useState([]);
  const handleChange = (event) => {
    BooksAPI.search(event.target.value)
      .then((books) => {
        setFoundBooks(Array.isArray(books) ? books : []);
      })
      .catch(() => {
        setFoundBooks([]);
      });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.map((foundBook) => (
            <li key={foundBook.id}>
              <Book
                book={
                  shelfBooks.find(
                    (shelfBook) => shelfBook.id === foundBook.id
                  ) ?? foundBook
                }
                onShelfChange={onShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
