import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import books from "../assets/childrensbooks.json";

function About() {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const book = books.filter((book) => {
      if (book.id === parseInt(id)) {
        return book;
      }
    });

    console.log("Vald bok:", book);
    setSelectedBook(book[0]);
  }, [id]); // Se till att vi har ett id från url:en innan vi filterar böcker

  return (
    <section>
      <h1>Detta är om-sidan. ID: {id}</h1>
      <article>
        <p>Titel: {selectedBook.title}</p>
        <p>Författare: {selectedBook.author}</p>
      </article>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Tillbaka till start
      </button>
    </section>
  );
}

export default About;
