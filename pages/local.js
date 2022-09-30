import React, { useState, useEffect } from "react";
import Header from "../src/components/Header";

import BooksLocal from "../src/components/BooksLocal";

const local = () => {
  const [bookList, setBookList] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

  function removeBook(id) {
    const book = bookList.filter((item) => item.key !== id);
    setBookList(book);
  }

  const bookElement = bookList.map((book) => {
    return (
      <BooksLocal
        key={book.key}
        id={book.key}
        cover={book.cover_edition_key}
        title={book.title}
        author={
          Array.isArray(book.author_name) ? book.author_name[0] : "No author"
        }
        year={book.first_publish_year}
        removeBook={removeBook}
      />
    );
  });

  return (
    <>
      <main>
        <Header />

        <div className="grid grid-cols-3 gap-2 mt-4 ">{bookElement}</div>
      </main>
    </>
  );
};

export default local;
