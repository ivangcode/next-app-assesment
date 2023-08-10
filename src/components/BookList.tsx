import { BooksContext } from "@/Books/BooksContext";
import { Library } from "@/types";
import { useContext } from "react";
import styles from "@/styles/BookList.module.css";
import { BookCard } from "./BookCard";

export function BookList() {
  const { books } = useContext(BooksContext);
  return (
    <ul className={styles.ul}>
      {books?.map((item: Library, index) => (
        // Component
        <BookCard item={item} key={item.book.ISBN} />
      ))}
    </ul>
  );
}
