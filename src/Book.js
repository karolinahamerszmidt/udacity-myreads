export const Book = ({ book, onShelfChange }) => {
  const handleChange = (event) => {
    onShelfChange(book, event.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks?.smallThumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select onChange={handleChange} value={book.shelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.join(", ")}</div>
    </div>
  );
};
