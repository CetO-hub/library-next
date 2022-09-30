import React from "react";
import Header from "../src/components/Header";

import Books from "../src/components/Books";

const local = () => {
  const bookList = JSON.parse(localStorage.getItem("books"));

  const bookElement = bookList.map((book) => {
    return (
      <Books
        key={book.key}
        id={book.key}
        cover={book.cover_edition_key}
        title={book.title}
        author={
          Array.isArray(book.author_name) ? book.author_name[0] : "No author"
        }
        year={book.first_publish_year}
      />
    );
  });

  return (
    <>
      <main>
        <Header />

        {bookElement}
      </main>
    </>
  );
};

export default local;
