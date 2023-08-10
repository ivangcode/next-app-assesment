import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { BooksContext } from "@/Books/BooksContext";
import styles from "../../styles/Book.module.css";
import { Books, Library } from "@/types";
import data from "../../data.json";
import { Paper, CircularProgress } from "@mui/material";

function getBookById(books: Books, id: string) {
  return books.library.find((book: Library) => book.book.ISBN === id) || null;
}

export default function BookPage() {
  const { books } = useContext(BooksContext);
  const router = useRouter();
  const [book, setBook] = useState<Library | null>(null);

  useEffect(() => {
    if (router.query.id) {
      const id = router.query.id as string;
      const foundBook = getBookById(data, id);
      setBook(foundBook);
    }
  }, [router.query.id, books]);

  if (!book) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "15%", left: "48%" }}
      />
    );
  }

  return (
    <main className={styles.main}>
      <Image
        src={book.book.cover}
        alt={book.book.title}
        width={200}
        height={300}
      />
      <Paper variant="outlined" elevation={1}>
        <header className={styles.book__header}>
          <h1>{book.book.title}</h1>
          <p>{book.book.synopsis}</p>
          <p>Autor: {book.book.author.name}</p>
        </header>
      </Paper>
    </main>
  );
}
