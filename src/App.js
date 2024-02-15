import React, { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Search } from "./Search";

const BooksApp = () => {
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setShelfBooks(books);
    });
  }, []);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        setShelfBooks(books);
      });
    });
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onShelfChange={handleShelfChange}
              shelfBooks={shelfBooks}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search onShelfChange={handleShelfChange} shelfBooks={shelfBooks} />
          }
        />
      </Routes>
    </div>
  );
};

export default BooksApp;
