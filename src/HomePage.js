import { Link } from "react-router-dom";
import { Book } from "./Book";

export const HomePage = ({ shelfBooks, onShelfChange }) => {
  const currentlyReading = shelfBooks.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = shelfBooks.filter((book) => book.shelf === "wantToRead");
  const read = shelfBooks.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onShelfChange={onShelfChange} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onShelfChange={onShelfChange} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onShelfChange={onShelfChange} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button type="button">Add a book</button>
        </Link>
      </div>
    </div>
  );
};
